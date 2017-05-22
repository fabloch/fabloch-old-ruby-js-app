import { Map } from "immutable"
import * as matchers from "jest-immutable-matchers"
import MockDate from "mockdate"
import moment from "moment"
import subscriptionsReducer from "./reducers"
import types from "./types"
import * as alt from "../../../api/fake/subscriptions"
import * as nextStates from "./testNextStates"
import initialState from "./initialState"

MockDate.set(moment.utc("2010-01-01", "YYYY-MM-DD", true))

describe("subscriptionsReducer", () => {
  beforeEach(() =>
    jest.addMatchers(matchers),
  )

  describe("default state", () => {
    it("has default state", () => {
      expect(
        subscriptionsReducer(undefined, { type: "ANOTHER_ACTION" }),
      ).toEqualImmutable(
        initialState,
      )
    })
  })

  describe("get", () => {
    it("handles FETCH_SUBSCRIPTIONS_REQUEST", () => {
      expect(
        subscriptionsReducer(undefined, {
          type: types.FETCH_SUBSCRIPTIONS_REQUEST,
        }),
      ).toEqualImmutable(
        initialState.set("isFetching", true),
      )
    })
    describe("handles FETCH_SUBSCRIPTIONS_SUCCESS", () => {
      it("subOkInMoreThan90", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data: alt.subOkInMoreThan90,
          }),
        ).toEqualImmutable(
          initialState.merge(
            nextStates.stateOkInMoreThan90,
          ),
        )
      })

      it("subShouldRenew90", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data: alt.subShouldRenew90,
          }),
        ).toEqualImmutable(
          initialState.merge(
            nextStates.stateShouldRenew90,
          ),
        )
      })

      it("subShouldRenew60", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data: alt.subShouldRenew60,
          }),
        ).toEqualImmutable(
          initialState.merge(
            nextStates.stateShouldRenew60,
          ),
        )
      })

      it("subShouldRenew30", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data: alt.subShouldRenew30,
          }),
        ).toEqualImmutable(
          initialState.merge(
            nextStates.stateShouldRenew30,
          ),
        )
      })

      it("subOut", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data: alt.subOut,
          }),
        ).toEqualImmutable(
          initialState.merge(
            nextStates.stateOut,
          ),
        )
      })
    })
    it("handles FETCH_SUBSCRIPTIONS_FAILURE", () => {
      expect(
        subscriptionsReducer(undefined, {
          type: types.FETCH_SUBSCRIPTIONS_FAILURE,
        }),
      ).toEqualImmutable(
        initialState.merge(Map({
          isFetching: false,
          fetchErrors: true,
        })),
      )
    })
  })
})
