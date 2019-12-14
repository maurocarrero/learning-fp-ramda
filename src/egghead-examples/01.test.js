import { getUpdatedPerson, getUpdatedPersonPointFree } from "./01";

const person = {
  id: 1,
  name: "Joe"
};

const expectedPerson = {
  ...person,
  avatar: "https://img.socialnetwork.com/avatar/1.png"
};

it("should set the avatar image to the object", () => {
  expect(getUpdatedPerson(person), "behaves as expected").toEqual(
    expectedPerson
  );
  expect(getUpdatedPerson(person), "same result").toEqual(
    getUpdatedPersonPointFree(person)
  );
});
