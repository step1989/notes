import { test } from "node:test";
import { strict as assert } from "node:assert/strict";

// sync examples
test("sync func must be passed", () => {
  assert.equal(1, 1);
});

test("sync func must be failed", () => {
  assert.equal(1, 2);
});

// async example
const asyncFunc = (value) =>
  new Promise((res, rej) => {
    if (value === 10) {
      return res(10);
    }

    return rej("Error");
  });

test("async func must be passed", async () => {
  const expected = await asyncFunc(10);
  assert.equal(expected, 10);
});

test("async func must be failed", async () => {
  const expected = await asyncFunc(11);
  assert.equal(expected, 10);
});
