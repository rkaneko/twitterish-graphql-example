import * as React from "react";

import { Tweet } from "../../domain/model/Tweet";

type Props = {
    readonly tweet: Tweet;
};

export const TweetEntry: React.SFC<Props> = props => {
    return (
        <li>
            <p>creator id: {props.tweet.creatorId}</p>
            <p>body: {props.tweet.body}</p>
            <p>created at: {props.tweet.tweetedAt.toISOString()}</p>
        </li>
    );
};
