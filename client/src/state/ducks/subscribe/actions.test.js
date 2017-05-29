import types from "./types"
import actions from "./actions"

import { subOkHasResubscribed as data } from "../../../api/fake/subscriptions"

const error = {
  status: 404,
  statusText: "Not Found",
}

describe("subscriptionsActions", () => {
  describe("fetch", () => {
    it("fetchSubscriptionsRequest", () => {
      expect(
        actions.fetchSubscriptionsRequest(),
      ).toEqual(
        {
          type: types.FETCH_SUBSCRIPTIONS_REQUEST,
        },
      )
    })

    it("fetchSubscriptionsFailure", () => {
      expect(
        actions.fetchSubscriptionsFailure(error),
      ).toEqual(
        {
          type: types.FETCH_SUBSCRIPTIONS_FAILURE,
          error,
        },
      )
    })

    it("fetchSubscriptionsSuccess", () => {
      expect(
        actions.fetchSubscriptionsSuccess(data),
      ).toEqual(
        {
          type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
          data,
        },
      )
    })
  })

  describe("selectPlan, selectPaymentMethod", () => {
    it("selectPlan", () => {
      expect(
        actions.selectPlan("regular"),
      ).toEqual(
        {
          type: types.SELECT_PLAN,
          plan: "regular",
        },
      )
    })

    it("selectPaymentMethod", () => {
      expect(
        actions.selectPaymentMethod("card"),
      ).toEqual(
        {
          type: types.SELECT_PAYMENT_METHOD,
          paymentMethod: "card",
        },
      )
    })

    it("focusStep", () => {
      expect(
        actions.focusStep(1),
      ).toEqual(
        {
          type: types.FOCUS_STEP,
          step: 1,
        },
      )
    })
  })

  describe("post", () => {
    it("postSubscriptionRequest", () => {
      expect(
        actions.postSubscriptionRequest(),
      ).toEqual(
        {
          type: types.POST_SUBSCRIPTION_REQUEST,
        },
      )
    })

    it("postSubscriptionFailure", () => {
      expect(
        actions.postSubscriptionFailure(error),
      ).toEqual(
        {
          type: types.POST_SUBSCRIPTION_FAILURE,
          error,
        },
      )
    })

    it("postSubscriptionSuccess", () => {
      expect(
        actions.postSubscriptionSuccess(data),
      ).toEqual(
        {
          type: types.POST_SUBSCRIPTION_SUCCESS,
          data,
        },
      )
    })
  })
})
