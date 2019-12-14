import { compose, fromPairs, map, split, tail } from "ramda";

const parseQs = compose(
  fromPairs,
  map(split("=")),
  split("&"),
  tail
);

export { parseQs };
