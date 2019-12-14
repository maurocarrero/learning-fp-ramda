import R from "ramda";
import * as RA from "ramda-adjunct";

// https://github.com/ramda/ramda/wiki/Cookbook#create-a-list-function
describe("create a list function", () => {
  let list;
  const expected = [1, 2, 3];

  describe("when using ES6", () => {
    beforeEach(() => {
      list = (...args) => args;
    });

    it("success", () => expect(list(1, 2, 3)).toEqual(expected));
    it("should return an empty array when called without args", () =>
      expect(list()).toEqual([]));
    it("should return null as only argument", () =>
      expect(list(null)).toEqual([null]));
  });

  describe("when using ramda", () => {
    beforeEach(() => {
      list = R.unapply(R.identity);
    });

    it("success", () => {
      expect(list(1, 2, 3)).toEqual(expected);
    });

    it("should return an empty array when called without args", () =>
      expect(list()).toEqual([]));
    it("should return nil elements", () =>
      expect(
        list(undefined, undefined, null, undefined, null, undefined)
      ).toEqual([undefined, undefined, null, undefined, null, undefined]));
  });

  describe("when using ramda-adjunct", () => {
    beforeEach(() => {
      list = RA.list;
    });

    it("success", () => {
      expect(list(1, 2, 3)).toEqual(expected);
    });
    it("should return an empty array when called without args", () =>
      expect(list()).toEqual([]));
    it("should return nil elements", () =>
      expect(
        list(undefined, undefined, null, undefined, null, undefined)
      ).toEqual([undefined, undefined, null, undefined, null, undefined]));
  });
});
