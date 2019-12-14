import { map, pick, project } from 'ramda';
// Select a Subset of Properties from a Collection of Objects
const getNameAndUrl = map(pick(['name', 'url']));
const getIdAndName = project(['id', 'name']);

export { getIdAndName, getNameAndUrl };
