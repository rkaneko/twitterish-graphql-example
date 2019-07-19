import path from "path";

import express from "express";
import graphqlHTTP from "express-graphql";

import { schema } from "../infra/twitter/schema";

const port = process.env.APP_PORT || 3033;
const app = express();

app.use(
    express.static(path.join(__dirname, "..", "..", "public"), {
        extensions: ["html", "svg"]
    })
);

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);
app.get(/^(?!\/graphql\/).*$/, (_, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
});

process.on("SIGTERM", () => {
    console.log("SIGTERM");
    process.exit(0);
});
process.on("SIGINT", () => {
    console.log("SIGINT");
    process.exit(0);
});

app.listen(port, error => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.info(`==> 🌎  Listening on port: ${port}. Open in your browser.`);
});
