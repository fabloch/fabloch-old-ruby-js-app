import types from "./types"

describe("subscriptions types", () => {

  it("FETCH_SUBSCRIPTIONS_REQUEST", () => {
    expect(
      types.FETCH_SUBSCRIPTIONS_REQUEST,
    ).toEqual(
      "fabloch/subscribe/FETCH_SUBSCRIPTIONS_REQUEST",
    )
  })

  it("FETCH_SUBSCRIPTIONS_FAILURE", () => {
    expect(
      types.FETCH_SUBSCRIPTIONS_FAILURE,
    ).toEqual(
      "fabloch/subscribe/FETCH_SUBSCRIPTIONS_FAILURE",
    )
  })

  it("FETCH_SUBSCRIPTIONS_SUCCESS", () => {
    expect(
      types.FETCH_SUBSCRIPTIONS_SUCCESS,
    ).toEqual(
      "fabloch/subscribe/FETCH_SUBSCRIPTIONS_SUCCESS",
    )
  })
})
