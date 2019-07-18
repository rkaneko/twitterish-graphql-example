import test from "ava";

import * as crypto from "./crypto";

test("Should get base64 encoded value.", t => {
    const actual = crypto.encodeBase64("Tweet:1");
    t.is(actual, "VHdlZXQ6MQ==");
});

test("Should decrypt base64 encoded value.", t => {
    const actual = crypto.decodeBase64("VHdlZXQ6MQ==");
    t.is(actual, "Tweet:1");
});
