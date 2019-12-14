import R from "ramda";
import * as RA from "ramda-adjunct";

describe("when using ramda", () => {
  it("should be able to be used directly", () => {
    expect(R.is(Object, {})).toBe(true);
    expect(R.is(Number, 1)).toBe(true);
    expect(R.is(Object, 1)).toBe(false);
    expect(R.is(String, "s")).toBe(true);
  });

  it("should be able to create partial functions", () => {
    const isString = R.is(String);
    const isObject = R.is(Object);
    const isNumber = R.is(Number);

    expect(isString("")).toBe(true);
    expect(isObject("s")).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});

describe("when using ramda-adjunct", () => {
  it("should be able to be used directly", () => {
    expect(RA.isObj({})).toBe(true);
    expect(RA.isNumber(1)).toBe(true);
    expect(RA.isObj(1)).toBe(false);
    expect(RA.isString("s")).toBe(true);
  });

  it("should be able to create partial functions", () => {
    const { isString, isObj, isNumber } = RA;
    expect(isString("")).toBe(true);
    expect(isObj("s")).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});

describe("when is Not", () => {
  it("should be able to be used directly", () => {
    const ramdaIsNotString = R.compose(
      R.not,
      R.is(String)
    );
    const { isNotString } = RA;

    expect(isNotString("str")).toBe(ramdaIsNotString("str"));
    expect(isNotString(123)).toBe(ramdaIsNotString(123));
    expect(isNotString([1, 2, 3])).toBe(ramdaIsNotString([1, 2, 3]));
  });
});

describe("when is nil or empty", () => {
  it("composing with both, not and isNil <> RA.isNotNilOrEmpty", () => {
    const isNotNil = R.compose(
      R.not,
      R.isNil
    );
    const isNotEmpty = R.compose(
      R.not,
      R.isEmpty
    );
    const ramdaIsNotNilOrEmpty = R.both(isNotNil, isNotEmpty);

    const { isNotNilOrEmpty } = RA;

    expect(isNotNilOrEmpty("str")).toBe(ramdaIsNotNilOrEmpty("str"));
    expect(isNotNilOrEmpty(123)).toBe(ramdaIsNotNilOrEmpty(123));
    expect(isNotNilOrEmpty([1, 2, 3])).toBe(ramdaIsNotNilOrEmpty([1, 2, 3]));
    expect(isNotNilOrEmpty(null)).toBe(ramdaIsNotNilOrEmpty(null));
    expect(isNotNilOrEmpty(undefined)).toBe(ramdaIsNotNilOrEmpty(undefined));
    expect(isNotNilOrEmpty([])).toBe(ramdaIsNotNilOrEmpty([]));
    expect(isNotNilOrEmpty(0)).toBe(ramdaIsNotNilOrEmpty(0));
  });
});
