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
})
