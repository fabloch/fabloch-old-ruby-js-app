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

describe("profilenReducer", () => {
  describe(" default state", () => {
    it("has a default state", () => {
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
    it("handles GET_REQUEST", () => {
      expect(
        profileReducer(undefined, {
          type: types.GET_REQUEST,
        }),
      ).toEqual(Map({
        isLoading: true,
      }))
    })

    it("handles GET_SUCCESS", () => {
      expect(
        is(
          profileReducer(undefined, {
            type: types.GET_SUCCESS,
            data,
          }),
          Map({
            data,
            isLoading: false,
            notFound: false,
          }),
        ),
      ).toBeTruthy()
    })

    it("handles GET_FAILURE", () => {
      expect(
        profileReducer(undefined, {
          type: types.GET_FAILURE,
        }),
      ).toEqual(Map({
        isLoading: false,
        notFound: true,
      }))
    })
  })
})
