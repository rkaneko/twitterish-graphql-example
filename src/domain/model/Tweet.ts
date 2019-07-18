export type Tweet = {
    readonly id: string;
    readonly body: string;
    readonly tweetedAt: Date;
    readonly creatorId: string;
    readonly retweetCount: number;
    readonly likeCount: number;
};
