import { describe, it } from "node:test";
import { strict as assert } from "node:assert/strict";

describe("grouping test", () => {
  it("first test", () => {
    assert.equal(1, 1);
  });
  it("second", () => {
    assert.equal("aa", "aa");
  });
});
