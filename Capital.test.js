const Capitalization = require("./JestTask3.js");

const str = "hello";

test("test Capitalization", () => {
  expect(Capitalization(str)).toBe("Hello");
  expect((str) => Capitalization()).toThrow(Error);
});
