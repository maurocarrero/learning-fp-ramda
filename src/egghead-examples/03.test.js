import { getIdAndName, getNameAndUrl } from "./03";
import d from "./data.json";

const [uno, dos, tres] = d.results;

const results = [uno, dos, tres];

it("should get the names", () => {
  expect(getNameAndUrl(results)).toEqual([
    {
      name: "Rick Sanchez",
      url: "https://rickandmortyapi.com/api/character/1"
    },
    { name: "Morty Smith", url: "https://rickandmortyapi.com/api/character/2" },
    { name: "Summer Smith", url: "https://rickandmortyapi.com/api/character/3" }
  ]);
  expect(getIdAndName(results)).toEqual([
    { id: 1, name: "Rick Sanchez" },
    { id: 2, name: "Morty Smith" },
    { id: 3, name: "Summer Smith" }
  ]);
});
