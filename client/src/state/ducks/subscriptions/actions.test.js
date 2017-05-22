import types from "./types"
import actions from "./actions"

import { subOkHasReubscribed as data } from "../../../api/fake/subscriptions"

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
          type: types.FETCH_REQUEST,
        },
      )
    })

    it("fetchSubscriptionsFailure", () => {
      expect(
        actions.fetchSubscriptionsFailure(error),
      ).toEqual(
        {
          type: types.FETCH_FAILURE,
          error,
        },
      )
    })

    it("fetchSubscriptionsSuccess", () => {
      expect(
        actions.fetchSubscriptionsSuccess(data),
      ).toEqual(
        {
          type: types.FETCH_SUCCESS,
          data,
        },
      )
    })
  })
})
