import * as React from "react";

import { Tweet } from "../../domain/model/Tweet";

import { TweetEntry } from "./TweetEntry";

type Props = {
    readonly tweets: Tweet[];
};

export const TweetList: React.SFC<Props> = props => {
    return (
        <ul>
            {props.tweets.map(tweet => (
                <TweetEntry key={tweet.id} tweet={tweet} />
            ))}
        </ul>
    );
};
