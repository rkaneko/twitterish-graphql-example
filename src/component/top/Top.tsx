import * as React from "react";
import { useState, useEffect } from "react";

import { Tweet } from "../../domain/model/Tweet";

import { getTweets } from "../../infra/twitter/getTweets";
import { PageInfo } from "../../infra/twitter/DefinitionTypes";

import { TweetList } from "./TweetList";

export const Top: React.FunctionComponent<{}> = () => {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [pageInfo, setPageInfo] = useState<PageInfo>({
        hasNextPage: true,
        hasPreviousPage: false
    });

    const fetchData = async () => {
        if (!pageInfo.hasNextPage) {
            return;
        }
        const variables = {
            tweetsAfter: pageInfo.endCursor || null,
            tweetsFirst: 10
        };
        const getTweetsResult = await getTweets(variables);
        const nextTweets = tweets.concat(getTweetsResult.tweets);
        setTweets(nextTweets);
        setPageInfo(getTweetsResult.pageInfo);
    };

    useEffect(() => {
        fetchData();
        return () => {};
    }, []);

    return (
        <>
            <div>Hello Twitterish app!</div>
            <TweetList tweets={tweets} />
            <button
                type="button"
                disabled={!pageInfo.hasNextPage}
                onClick={() => fetchData()}
            >
                more
            </button>
        </>
    );
};
