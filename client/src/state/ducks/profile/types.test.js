import types from "./types"

describe("session types", () => {

  it("FETCH_REQUEST", () => {
    expect(
      types.FETCH_REQUEST,
    ).toEqual(
      "fabloch/profile/FETCH_REQUEST",
    )
  })

  it("FETCH_FAILURE", () => {
    expect(
      types.FETCH_FAILURE,
    ).toEqual(
      "fabloch/profile/FETCH_FAILURE",
    )
  })

  it("FETCH_SUCCESS", () => {
    expect(
      types.FETCH_SUCCESS,
    ).toEqual(
      "fabloch/profile/FETCH_SUCCESS",
    )
  })

  it("TOGGLE_EDITING", () => {
    expect(
      types.TOGGLE_EDITING,
    ).toEqual(
      "fabloch/profile/TOGGLE_EDITING",
    )
  })

  it("STOP_EDITING", () => {
    expect(
      types.STOP_EDITING,
    ).toEqual(
      "fabloch/profile/STOP_EDITING",
    )
  })

  it("POST_REQUEST", () => {
    expect(
      types.POST_REQUEST,
    ).toEqual(
      "fabloch/profile/POST_REQUEST",
    )
  })

  it("POST_FAILURE", () => {
    expect(
      types.POST_FAILURE,
    ).toEqual(
      "fabloch/profile/POST_FAILURE",
    )
  })

  it("POST_SUCCESS", () => {
    expect(
      types.POST_SUCCESS,
    ).toEqual(
      "fabloch/profile/POST_SUCCESS",
    )
  })

  it("PUT_REQUEST", () => {
    expect(
      types.PUT_REQUEST,
    ).toEqual(
      "fabloch/profile/PUT_REQUEST",
    )
  })

  it("PUT_FAILURE", () => {
    expect(
      types.PUT_FAILURE,
    ).toEqual(
      "fabloch/profile/PUT_FAILURE",
    )
  })

  it("PUT_SUCCESS", () => {
    expect(
      types.PUT_SUCCESS,
    ).toEqual(
      "fabloch/profile/PUT_SUCCESS",
    )
  })

  it("DELETE_REQUEST", () => {
    expect(
      types.DELETE_REQUEST,
    ).toEqual(
      "fabloch/profile/DELETE_REQUEST",
    )
  })

  it("DELETE_FAILURE", () => {
    expect(
      types.DELETE_FAILURE,
    ).toEqual(
      "fabloch/profile/DELETE_FAILURE",
    )
  })

  it("DELETE_SUCCESS", () => {
    expect(
      types.DELETE_SUCCESS,
    ).toEqual(
      "fabloch/profile/DELETE_SUCCESS",
    )
  })
})
