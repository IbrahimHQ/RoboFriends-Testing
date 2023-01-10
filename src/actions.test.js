import * as actions from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import nock from "nock";

export const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const text = 'some search';
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})

describe("requestRobots", () => {
  it("should create REQUEST_ROBOTS_PENDING", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    const expectedAction = { type: REQUEST_ROBOTS_PENDING };

    expect(action[0]).toEqual(expectedAction);
  });

  it ("should create REQUEST_ROBOTS_SUCCESS", () => {
    const store = mockStore();
    const data = { id: 5, name: "Jack", email: "jack@gmail.com" };

    nock(actions.basePath).get(actions.endpoint).reply(200, data);
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    const expectedAction = { type: REQUEST_ROBOTS_SUCCESS, payload: data };

    expect(action).toEqual(expectedAction);
  });

  it ("should create REQUEST_ROBOTS_FAILED", () => {
    const store = mockStore();
    const error = "some error";

    nock(actions.basePath).get(actions.endpoint).replyWithError(error);
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    const expectedAction = { type: REQUEST_ROBOTS_FAILED, payload: error };

    expect(action).toEqual(expectedAction);
  });
});