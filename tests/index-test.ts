import obj from "../src/index";

describe("obj", () => {
  it("works", () => true);

  it("does not work", () => {
    throw new Error("oh no!");
  });
});
