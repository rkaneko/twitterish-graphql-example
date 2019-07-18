import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";

const httpLink = new HttpLink({
    uri: "/graphql",
    credentials: "same-origin",
    fetchOptions: {
        mode: "cors"
    }
});

const link = ApolloLink.from([httpLink]);

export const graphQLClient = new ApolloClient<NormalizedCacheObject>({
    link,
    cache: new InMemoryCache()
});
