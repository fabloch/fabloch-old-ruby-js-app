import { Map, fromJS } from "immutable"
import * as matchers from "jest-immutable-matchers"
import MockDate from "mockdate"
import moment from "moment"
import subscriptionsReducer from "./reducers"
import types from "./types"
import * as alt from "../../../api/fake/subscriptions"

MockDate.set(moment.utc("2010-01-01", "YYYY-MM-DD", true))

const nextStateOkInMoreThan90 = fromJS({
  isFetching: false,
  fetchErrors: false,
  memberUntil: "2010-04-30",
  memberUntilFromNow: "dans 4 mois",
  memberUntilFromNowInDays: 119,
  memberSince: "2009-05-01",
  memberSinceFromNow: "il y a 8 mois",
  memberSinceFromNowInDays: -245,
  allMemberships: [
    {
      type: "regular",
      startDate: "2009-05-01",
      endDate: "2010-04-30",
      price: "20",
      paymentMethod: "cash",
    },
  ],
})


describe("subscriptionsReducer", () => {
  beforeEach(() =>
    jest.addMatchers(matchers),
  )

  describe("default state", () => {
    it("has default state", () => {
      expect(
        subscriptionsReducer(undefined, { type: "ANOTHER_ACTION" }),
      ).toEqual(
        Map({
        }),
      )
    })
  })

  describe("get", () => {
    it("handles FETCH_REQUEST", () => {
      expect(
        subscriptionsReducer(undefined, {
          type: types.FETCH_REQUEST,
        }),
      ).toEqual(Map({
        isFetching: true,
      }))
    })
    it("handles FETCH_SUCCESS", () => {
      expect(
        subscriptionsReducer(undefined, {
          type: types.FETCH_SUCCESS,
          data: alt.subOkInMoreThan90,
        }),
      ).toEqualImmutable(
        nextStateOkInMoreThan90,
      )
    })
    it("handles FETCH_FAILURE", () => {
      expect(
        subscriptionsReducer(undefined, {
          type: types.FETCH_FAILURE,
        }),
      ).toEqual(Map({
        isFetching: false,
        fetchErrors: true,
      }))
    })
  })
})
