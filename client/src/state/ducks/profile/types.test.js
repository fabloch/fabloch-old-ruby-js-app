import types from "./types"

describe("session types", () => {

  it("GET_REQUEST", () => {
    expect(
      types.GET_REQUEST,
    ).toEqual(
      "fabloch/profile/GET_REQUEST",
    )
  })

  it("GET_FAILURE", () => {
    expect(
      types.GET_FAILURE,
    ).toEqual(
      "fabloch/profile/GET_FAILURE",
    )
  })

  it("GET_SUCCESS", () => {
    expect(
      types.GET_SUCCESS,
    ).toEqual(
      "fabloch/profile/GET_SUCCESS",
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
