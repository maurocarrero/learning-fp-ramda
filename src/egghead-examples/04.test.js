import R from "ramda";
import { adjustPrice } from "./04";

const products = [
  { name: "Jeans", price: 80, category: "clothes" },
  { name: "Cards", price: 5, category: "games" },
  { name: "iPhone", price: 649, category: "electronics" },
  { name: "Freakonomics", price: 30, category: "books" }
];

describe();

it("adjust price", () => {
  expect(
    adjustPrice({
      price: 100,
      category: "books"
    })
  ).toEqual({
    price: 50,
    category: "books"
  });
});

it("should apply 50 discount only to clothes", () => {
  expect(R.map(adjustPrice)(products)).toEqual([
    { category: "clothes", name: "Jeans", price: products[0].price * 0.5 },
    ...R.tail(products)
  ]);
});
