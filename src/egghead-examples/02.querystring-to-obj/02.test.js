import R from 'ramda';
import { parseQs } from './02';

const queryString = '?page=2&pageSize=10&total=203';
const expectedQs = {
  page: '2',
  pageSize: '10',
  total: '203'
};

it('parse the query string', () => {
  expect(parseQs(queryString)).toEqual(expectedQs);
});

describe('fromPairs', () => {
  it('should create an object from a pair', () => {
    expect(
      R.fromPairs([
        [1, 2],
        [3, 4]
      ])
    ).toEqual({
      1: 2,
      3: 4
    });

    expect(
      R.fromPairs([
        ['firstName', 'Mauro'],
        ['lastName', 'Carrero']
      ])
    ).toEqual({
      firstName: 'Mauro',
      lastName: 'Carrero'
    });
  });

  it('should get my name: compose, converge and fromPairs', () => {
    expect(
      R.compose(
        R.converge(R.concat, [R.prop('firstName'), R.prop('lastName')]),
        R.fromPairs
      )([
        ['firstName', 'Mauro'],
        ['lastName', 'Carrero']
      ])
    ).toEqual('MauroCarrero');
  });
});
