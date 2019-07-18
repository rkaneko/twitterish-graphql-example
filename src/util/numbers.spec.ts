import test from "ava";

import * as numbers from "./numbers";

test("Should get incremental number array.", t => {
    const specs = [
        {
            input: {
                min: -1,
                max: 5
            },
            expected: [-1, 0, 1, 2, 3, 4, 5]
        },
        {
            input: {
                min: 1,
                max: 1
            },
            expected: [1]
        }
    ];

    specs.forEach((spec, i) => {
        const actual = numbers.range(spec.input.min, spec.input.max);
        t.deepEqual(actual, spec.expected, `[${i}] Failed.`);
    });
});

test("Should throw an error when the arg min is greater than the arg max for range.", t => {
    const error = t.throws(() => {
        numbers.range(2, 1);
    }, Error);
    t.is(
        error.message,
        "Illegal argument: min must be less than and equal to max."
    );
});

test("Should get a random number in [min, max].", t => {
    const min = 1;
    const max = 5;
    const actual = numbers.randomNumIn(min, max);
    t.true(typeof actual === "number");
    t.true(min <= actual && actual <= 5);
});

test("Should throw an error when the arg min is greater than the arg max for random number range.", t => {
    const error = t.throws(() => {
        numbers.randomNumIn(2, 1);
    }, Error);
    t.is(
        error.message,
        "Illegal argument: min must be less than and equal to max."
    );
});
