import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { addMockFunctionsToSchema } from "graphql-tools";
import "isomorphic-fetch";

import { mocks } from "./mocks";
import { schema } from "./schema";

addMockFunctionsToSchema({
    schema,
    mocks,
    preserveResolvers: false
});

export const mockGraphQLClient = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache()
});
