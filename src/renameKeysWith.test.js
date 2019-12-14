import R from "ramda";
import * as RA from "ramda-adjunct";

// https://github.com/ramda/ramda/wiki/Cookbook#map-keys-of-an-object-rename-keys-by-a-function
describe("Map keys of an object (rename keys by a function)", () => {
  const expected = { A: 1, B: 2, C: 3 };

  it(" using ramda", () => {
    const mapKeys = R.curry((fn, obj) =>
      R.fromPairs(R.map(R.adjust(0, fn), R.toPairs(obj)))
    );
    expect(mapKeys(R.toUpper, { a: 1, b: 2, c: 3 })).toEqual(expected);
  });

  it("using ramda-adjunct", () => {
    expect(RA.renameKeysWith(R.toUpper, { a: 1, b: 2, c: 3 })).toEqual(
      expected
    );
  });
});
