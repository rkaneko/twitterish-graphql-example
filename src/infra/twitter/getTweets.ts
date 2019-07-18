import { NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import gql from "graphql-tag";

import { GetTweetsQuery, GetTweetsQueryVariables } from "./DefinitionTypes";
import { graphQLClient } from "./graphQLClient";
import { mapConnectionTo } from "./mapping/tweet";
import { GetTweets } from "./graphql/dist/GetTweets";

const query = gql`
    ${GetTweets}
`;

export function getTweets(
    variables: GetTweetsQueryVariables,
    client: ApolloClient<NormalizedCacheObject> = graphQLClient
): Promise<any> {
    return client
        .query<GetTweetsQuery>({
            query,
            variables
        })
        .then(json => {
            if (!(json.data && json.data.getTweets)) {
                throw new Error(`Failed to get tweets.`);
            }
            return mapConnectionTo(json.data.getTweets);
        });
}
