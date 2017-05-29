import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import nock from "nock"

import types from "./types"
import operations from "./operations"
import mockLocalStorage from "../../../utils/mockLocalStorage"
import { chosenAlt as data } from "../../../api/fake/subscriptions"

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

  describe("plan Operations", () => {
    it("selectPlan", () => {
      expect(
        operations.selectPlan("regular"),
      ).toEqual(
        {
          type: types.SELECT_PLAN,
          plan: "regular",
        },
      )
    })

    it("selectPaymentMethod", () => {
      expect(
        operations.selectPaymentMethod("card"),
      ).toEqual(
        {
          type: types.SELECT_PAYMENT_METHOD,
          paymentMethod: "card",
        },
      )
    })

    it("focusStep", () => {
      expect(
        operations.focusStep(1),
      ).toEqual(
        {
          type: types.FOCUS_STEP,
          step: 1,
        },
      )
    })
  })

  describe("postSubscription", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    describe("with valid form", () => {
      it("triggers POST_SUBSCRIPTION_SUCCESS with subscription infos", () => {
        const store = mockStore({})

        nock("http://localhost")
        .post("/v1/subscriptions")
        .reply(
          201,
          {
            data: {
              attributes: data,
            },
          },
        )

        return store.dispatch(operations.postSubscription(data))
        .then(() => { // return of async operations
          const expectedActions = [
            { type: types.POST_SUBSCRIPTION_REQUEST },
            {
              type: types.POST_SUBSCRIPTION_SUCCESS,
              data,
            },
          ]

          expect(store.getActions()[0]).toEqual(expectedActions[0])
          expect(store.getActions()[1]).toEqual(expectedActions[1])
        })
      })
    })

    describe("with invalid form", () => {
      xit("triggers POST_SUBSCRIPTION_FAILURE", () => {
        const wrongData = {
          firstname: "Sébastien",
          lastname: "Nicolaïdis",
          description: "Description",
          birthdate: "1979-09-13",
        }

        const store = mockStore({})

        nock("http://localhost")
        .post("/v1/profile")
        .reply(
          422,
          {
            username: [
              "can't be blank",
              "only allows lowercase letters or \"_\"",
              "is too short (minimum is 3 characters)",
            ],
          },
        )

        return store.dispatch(operations.postSubscription(wrongData))
        .then(() => { // return of async operations
          const expectedActions = [
            { type: types.POST_SUBSCRIPTION_REQUEST },
            {
              type: types.POST_SUBSCRIPTION_FAILURE,
              error: { status: 404, statusText: "Not Found" },
            },
          ]

          expect(store.getActions()[0]).toEqual(expectedActions[0])
          expect(store.getActions()[1]).toEqual(expectedActions[1])
        })
      })
    })
  })
})
