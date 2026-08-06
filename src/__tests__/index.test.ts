import { describe, expect, it } from "bun:test";
import { func } from "../index.js";

describe("func", () => {
  it("works", () => {
    expect(func({ isValid: true })).toBe(2);
  });
});
