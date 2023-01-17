import { test } from "node:test";
import { strict as assert } from "node:assert/strict";

test("subtest example", async (t) => {
  await t.test("once test", () => {
    assert.equal(1, 1);
  });

  await t.test("second test", () => {
    assert.equal("1", "1");
  });
});
