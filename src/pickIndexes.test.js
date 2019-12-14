import R from "ramda";
import * as RA from "ramda-adjunct";

// https://github.com/ramda/ramda/wiki/Cookbook#pick-values-a-from-list-by-indexes
describe("cookbook: pick values from a list by indexes", () => {
  const expected = ["a", "c"];

  it("using ES6", () => {
    const pickIndexes = (indexes, list) =>
      list.filter((_, idx) => indexes.includes(idx));
    expect(pickIndexes([0, 2], ["a", "b", "c"])).toEqual(expected);
  });

  it("using ramda", () => {
    expect(
      R.compose(
        R.values,
        R.pickAll
      )([0, 2], ["a", "b", "c"])
    ).toEqual(expected);
  });

  it("using ramda-adjunct", () => {
    expect(RA.pickIndexes([0, 2], ["a", "b", "c"])).toEqual(expected);
  });
});
