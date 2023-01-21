import { test } from "node:test";
import { strict as assert } from "node:assert/strict";

//
//sync examples

const a = async () => {
    assert.strictEqual(1, 1);
}
const b = async () => {
    assert.strictEqual(2, 2);
}
const c =async () => {
    assert.strictEqual(3, 3);
}


test("arrray", () => {
    [a, b, c].forEach((fun) => {
        fun.call();
    })
});