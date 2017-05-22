import types from "./types"

describe("session types", () => {

  it("FETCH_REQUEST", () => {
    expect(
      types.FETCH_REQUEST,
    ).toEqual(
      "fabloch/subscriptions/FETCH_REQUEST",
    )
  })

  it("FETCH_FAILURE", () => {
    expect(
      types.FETCH_FAILURE,
    ).toEqual(
      "fabloch/subscriptions/FETCH_FAILURE",
    )
  })

  it("FETCH_SUCCESS", () => {
    expect(
      types.FETCH_SUCCESS,
    ).toEqual(
      "fabloch/subscriptions/FETCH_SUCCESS",
    )
  })
})
