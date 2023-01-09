import * as reducers from './reducers'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';


describe('searchRobots', () => {
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ""});
  });

  const initialStateSearch = {searchField: ''};

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: 'abc'
      })
    ).toEqual({searchField: "abc"});
  });
});

describe('requestRobots', () => {
  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(
      {robots: [], isPending: false}
    );
  });

  const initialStateRobots = {robots: [], isPending: false};

  it('should handle PENDING case', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
        payload: {isPending: true}
      })
    ).toEqual({robots: [], isPending: true});
  });

  it('should handle SUCCESS case', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{
            id: '123',
            name: 'test',
            email: 'j@jmail.com'
          }]
      })
    ).toEqual(
      {
        robots: [{
          id: '123',
          name: 'test',
          email: 'j@jmail.com'
        }],
        isPending: false
      }
    );
  });

  it('should handle FAILED case', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOO'
      })
    ).toEqual(
      {
        error: 'NOOO',
        robots: [],
        isPending: false
      }
    );
  });
});