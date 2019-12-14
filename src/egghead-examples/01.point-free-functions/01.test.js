import R from 'ramda';
import { getUpdatedPerson, getUpdatedPersonPointFree } from './01';

const person = {
  id: 1,
  name: 'Joe'
};

const expectedPerson = {
  ...person,
  avatar: 'https://img.socialnetwork.com/avatar/1.png'
};

it('should set the avatar image to the object', () => {
  expect(getUpdatedPerson(person), 'behaves as expected').toEqual(
    expectedPerson
  );
  expect(getUpdatedPerson(person), 'same result').toEqual(
    getUpdatedPersonPointFree(person)
  );
});

describe('learning about: ASSOC', () => {
  const src = {};
  let res;

  beforeAll(() => {
    res = R.assoc('myProp', 123)(src);
  });

  it('should associate a value to an object prop', () => {
    expect(res).toEqual({
      myProp: 123
    });
  });

  it('should pass common rules', () => {
    expect(res, 'does not mutate the src').not.toBe(src);
    expect(R.assoc('myProp')(123)(src), 'is curried').toEqual(res);
  });
});

describe('learning about: CONVERGE', () => {
  it('should associate a value to an object prop', () => {
    expect(
      R.converge(R.concat, [R.prop('firstName'), R.prop('lastName')])({
        firstName: 'Mauro',
        lastName: 'Carrero'
      })
    ).toEqual('MauroCarrero');
  });
});
