import { Map, is } from "immutable"
import profileReducer from "./reducers"
import types from "./types"

const data = {
  username: "seb_nicolaidis",
  firstname: "Sébastien",
  lastname: "Nicolaïdis",
  description: "Description",
  birthdate: "1979-09-13",
}

const errors = {
  username: [
    "can't be blank",
    "only allows lowercase letters or \"_\"",
    "is too short (minimum is 3 characters)",
  ],
}

describe("profilenReducer", () => {
  describe("default state", () => {
    it("has default state", () => {
      expect(
        profileReducer(undefined, { type: "ANOTHER_ACTION" }),
      ).toEqual(
        Map({
          isLoading: false,
        }),
      )
    })
  })

  describe("get", () => {
    it("handles FETCH_REQUEST", () => {
      expect(
        profileReducer(undefined, {
          type: types.FETCH_REQUEST,
        }),
      ).toEqual(Map({
        isLoading: true,
      }))
    })

    it("handles FETCH_SUCCESS", () => {
      expect(
        is(
          profileReducer(undefined, {
            type: types.FETCH_SUCCESS,
            data,
          }),
          Map({
            data,
            isLoading: false,
            errors: false,
          }),
        ),
      ).toBeTruthy()
    })

    it("handles FETCH_FAILURE", () => {
      expect(
        profileReducer(undefined, {
          type: types.FETCH_FAILURE,
        }),
      ).toEqual(Map({
        isLoading: false,
        errors: true,
      }))
    })
  })

  describe("post", () => {
    it("handles POST_REQUEST", () => {
      expect(
        profileReducer(undefined, {
          type: types.POST_REQUEST,
        }),
      ).toEqual(Map({
        isLoading: true,
      }))
    })

    it("handles POST_SUCCESS", () => {
      expect(
        is(
          profileReducer(undefined, {
            type: types.POST_SUCCESS,
            data,
          }),
          Map({
            data,
            isLoading: false,
            errors: false,
          }),
        ),
      ).toBeTruthy()
    })

    it("handles POST_FAILURE", () => {
      expect(
        profileReducer(undefined, {
          type: types.POST_FAILURE,
        }),
      ).toEqual(Map({
        isLoading: false,
        errors: true,
      }))
    })
  })
})
