import { parseQs } from "./02";

const queryString = "?page=2&pageSize=10&total=203";
const expectedQs = {
  page: "2",
  pageSize: "10",
  total: "203"
};

it("parse the query string", () => {
  expect(parseQs(queryString)).toEqual(expectedQs);
});
