const { describe } = require("node:test");
const getPercent = require("../units/get_percent.js");
// import { getPercent } from "../units/get_percent.js";

describe("Test some simple values for get percent", () => {
  const base = 100;
  it("Get 20 percent of 100", () => {
    expect(getPercent(20, base)).toBe(20);
  });
  it("Get 200 percent of 100", () => {
    expect(getPercent(200, base)).toBe(300);
  });
  it("Get 100 percent of 100", () => {
    expect(getPercent(100, base)).toBe(100);
  });
});

describe("Test some corner cases", () => {
  it("Get 0 percent of 100", () => {
    expect(getPercent(0, 100)).toBe(0);
  });
  it("Get 100 percent of 0", () => {
    expect(getPercent(100, 0)).toBe(0);
  });
});
