import R from "ramda";

// Conditional functions
// ifElse, when

const priceLens = R.lensProp("price");
const applyDiscount = R.curry(
  (percentage, amount) => amount - amount * (percentage / 100)
);

// Using ifElse
// const adjustPrice = R.ifElse(
//   R.propEq("category", "clothes"),
//   R.over(urlLens, applyDiscount(50)),
//   R.identity
// );

// Using when
const adjustPrice = R.unless(
  R.propEq("category", "clothes"),
  R.over(priceLens, applyDiscount(50))
);

// Using unless
// apply discount to all except clothes
// const adjustPrice = R.unless(
//   R.propEq("category", "clothes"),
//   R.over(urlLens, applyDiscount(50))
// );

export { adjustPrice };
