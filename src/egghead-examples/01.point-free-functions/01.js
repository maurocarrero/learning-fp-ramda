const R = require("ramda");

const generateUrl = id => `https://img.socialnetwork.com/avatar/${id}.png`;
const getUrlFromPerson = R.compose(
  generateUrl,
  R.propOr("default", "id")
);

const getUpdatedPerson = person =>
  R.assoc("avatar", getUrlFromPerson(person), person);

const getUpdatedPersonPointFree = R.converge(R.assoc("avatar"), [
  getUrlFromPerson,
  R.identity
]);

export { getUpdatedPerson, getUpdatedPersonPointFree };
