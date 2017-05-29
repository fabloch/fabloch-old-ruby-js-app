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

  it("SELECT_PLAN", () => {
    expect(
      types.SELECT_PLAN,
    ).toEqual(
      "fabloch/subscribe/SELECT_PLAN",
    )
  })

  it("SELECT_PAYMENT_METHOD", () => {
    expect(
      types.SELECT_PAYMENT_METHOD,
    ).toEqual(
      "fabloch/subscribe/SELECT_PAYMENT_METHOD",
    )
  })

  it("FOCUS_STEP", () => {
    expect(
      types.FOCUS_STEP,
    ).toEqual(
      "fabloch/subscribe/FOCUS_STEP",
    )
  })

  it("POST_SUBSCRIPTION_REQUEST", () => {
    expect(
      types.POST_SUBSCRIPTION_REQUEST,
    ).toEqual(
      "fabloch/subscribe/POST_SUBSCRIPTION_REQUEST",
    )
  })

  it("POST_SUBSCRIPTION_FAILURE", () => {
    expect(
      types.POST_SUBSCRIPTION_FAILURE,
    ).toEqual(
      "fabloch/subscribe/POST_SUBSCRIPTION_FAILURE",
    )
  })

  it("POST_SUBSCRIPTION_SUCCESS", () => {
    expect(
      types.POST_SUBSCRIPTION_SUCCESS,
    ).toEqual(
      "fabloch/subscribe/POST_SUBSCRIPTION_SUCCESS",
    )
  })
})
