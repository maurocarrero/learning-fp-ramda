import R from "ramda";
import * as RA from "ramda-adjunct";

// https://github.com/ramda/ramda/wiki/Cookbook#rename-keys-of-an-object.
describe("Rename keys of an object", () => {
  const input = { firstName: "Elisia", age: 22, type: "human" };
  const expected = { name: "Elisia", age: 22, kind: "human" };

  it("using ES6", () => {
    const renameKeys = keysMap => obj => {
      const keysMapKeys = Object.keys(keysMap);
      return Object.keys(obj).reduce((acc, k) => {
        const key = keysMapKeys.includes(k) ? keysMap[k] : k;
        acc[key] = obj[k];
        return acc;
      }, {});
    };
    expect(
      renameKeys({ firstName: "name", type: "kind", foo: "bar" })(input)
    ).toEqual(expected);
    expect(
      renameKeys(123, "hey there", true)(input),
      "trying unexpected args"
    ).toEqual(input);
    expect(() => {
      renameKeys(null)(input);
    }).toThrowError("Cannot convert undefined or null to object");
    expect(() => {
      renameKeys(null)(null);
    }).toThrowError("Cannot convert undefined or null to object");
  });

  it("using ramda", () => {
    const renameKeys = R.curry((keysMap, obj) =>
      R.reduce(
        (acc, key) => R.assoc(keysMap[key] || key, obj[key], acc),
        {},
        R.keys(obj)
      )
    );
    expect(
      renameKeys({ firstName: "name", type: "kind", foo: "bar" })(input)
    ).toEqual(expected);
    expect(() => {
      renameKeys(123, "hey there", true)(input);
    }, "trying unexpected args").toThrowError(
      "renameKeys(...) is not a function"
    );
    expect(() => {
      renameKeys(null)(input);
    }).toThrowError("Cannot read property 'firstName' of null");
    expect(renameKeys(null)(null)).toEqual({});
  });

  it("using ramda-adjunct", () => {
    expect(
      RA.renameKeys({ firstName: "name", type: "kind", foo: "bar" })(input)
    ).toEqual(expected);
    expect(RA.renameKeys(123)(input)).toEqual(input);
    expect(() => {
      RA.renameKeys(null)(input);
    }).toThrowError("Cannot convert undefined or null to object");
    expect(RA.renameKeys(null)(null)).toEqual({});
  });
});
