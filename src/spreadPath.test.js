import R from "ramda";
import * as RA from "ramda-adjunct";

// https://github.com/ramda/ramda/wiki/Cookbook#spreadpath
describe("spread a given path at the root of the object", () => {
  let spreadPath;

  describe("when using ES6", () => {
    spreadPath = (path, obj) => {};
  });
  describe("when using ramda", () => {
    beforeEach(() => {
      spreadPath = R.curryN(
        2,
        R.converge(R.merge, [R.dissocPath, R.pathOr({})])
      );
    });
    it("should succeed", () => {
      expect(
        spreadPath(["b1", "b2"], { a: 1, b1: { b2: { c: 3, d: 4 } } })
      ).toEqual({ a: 1, c: 3, d: 4, b1: {} });
    });
    it("should succeed", () => {
      expect(
        spreadPath(["primero", "segundo"], {
          primero: {
            segundo: {
              firstName: "Orson",
              lastName: "Figardi"
            }
          }
        })
      ).toEqual({ firstName: "Orson", lastName: "Figardi", primero: {} });
    });
  });
  describe("when using ramda-adjunct", () => {
    beforeEach(() => {
      spreadPath = RA.spreadPath;
    });
    it("should succeed", () => {
      expect(
        spreadPath(["b1", "b2"], { a: 1, b1: { b2: { c: 3, d: 4 } } })
      ).toEqual({ a: 1, c: 3, d: 4, b1: {} });
    });
    it("should succeed", () => {
      expect(
        spreadPath(["primero", "segundo"], {
          primero: {
            segundo: {
              name: "hola"
            }
          }
        })
      ).toEqual({ name: "hola", primero: {} });
    });
  });
});
