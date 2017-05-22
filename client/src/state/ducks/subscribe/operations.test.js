import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import nock from "nock"

import types from "./types"
import operations from "./operations"
import mockLocalStorage from "../../../utils/mockLocalStorage"
import { subOkHasResubscribed as data } from "../../../api/fake/subscriptions"

mockLocalStorage()
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const error = {
  status: 404,
  statusText: "Not Found",
}

describe("subscriptionsOperations", () => {
  describe("fetchSubscriptions", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    describe("when subscriptions exists", () => {
      it("triggers FETCH_SUBSCRIPTIONS_SUCCESS with subscriptions infos", () => {
        const store = mockStore({})

        nock("http://localhost")
        .get("/v1/subscriptions")
        .reply(
          200,
          {
            data: {
              attributes: data,
            },
          },
        )

        return store.dispatch(operations.fetchSubscriptions())
        .then(() => { // return of async operations
          const expectedActions = [
            { type: types.FETCH_SUBSCRIPTIONS_REQUEST },
            {
              type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
              data,
            },
          ]

          expect(store.getActions()[0]).toEqual(expectedActions[0])
          expect(store.getActions()[1]).toEqual(expectedActions[1])
        })
      })
    })

    describe("when subscriptions does not exit", () => {
      it("triggers FETCH_SUBSCRIPTIONS_FAILURE", () => {
        const store = mockStore({})

        nock("http://localhost")
        .get("/v1/subscriptions")
        .reply(
          404,
        )

        return store.dispatch(operations.fetchSubscriptions())
        .then(() => { // return of async operations
          const expectedActions = [
            { type: types.FETCH_SUBSCRIPTIONS_REQUEST },
            {
              type: types.FETCH_SUBSCRIPTIONS_FAILURE,
              error,
            },
          ]

          expect(store.getActions()[0]).toEqual(expectedActions[0])
          expect(store.getActions()[1]).toEqual(expectedActions[1])
        })
      })
    })
  })

  describe("fetchFakeSubscriptions", () => {
    it("triggers FETCH_SUBSCRIPTIONS_SUCCESS with subscriptions infos", () => {
      const store = mockStore({})

      return store.dispatch(operations.fetchFakeSubscriptions())
      .then(() => { // return of async operations
        const expectedActions = [
          { type: types.FETCH_SUBSCRIPTIONS_REQUEST },
          {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data,
          },
        ]

        expect(store.getActions()[0]).toEqual(expectedActions[0])
        expect(store.getActions()[1]).toEqual(expectedActions[1])
      })
    })
  })
})
