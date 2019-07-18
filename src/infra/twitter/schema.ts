import { buildClientSchema } from "graphql";
import { addMockFunctionsToSchema } from "graphql-tools";

import { mocks } from "./mocks";

import schemaJson from "../../../graphql/schema.json";

const schema = buildClientSchema(schemaJson as any);

addMockFunctionsToSchema({
    schema,
    mocks,
    preserveResolvers: false
});

export { schema };
