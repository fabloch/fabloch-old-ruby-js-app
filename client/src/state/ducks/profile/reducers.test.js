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
  describe("default state", () => {
    it("has default state", () => {
      expect(
        profileReducer(undefined, { type: "ANOTHER_ACTION" }),
      ).toEqual(
        Map({
          isLoading: false,
          isEditing: false,
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
        isEditing: false,
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
            isEditing: false,
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
        isEditing: false,
        errors: true,
      }))
    })
  })

  describe("edit", () => {
    it("handles TOGGLE_EDIT false to true", () => {
      const initialState = Map({
        isLoading: false,
        isEditing: false,
      })
      expect(
        profileReducer(initialState, {
          type: types.TOGGLE_EDIT,
        }),
      ).toEqual(Map({
        isLoading: false,
        isEditing: true,
      }))
    })
    it("handles TOGGLE_EDIT true to false", () => {
      const initialState = Map({
        isLoading: false,
        isEditing: true,
      })
      expect(
        profileReducer(initialState, {
          type: types.TOGGLE_EDIT,
        }),
      ).toEqual(Map({
        isLoading: false,
        isEditing: false,
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
        isEditing: false,
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
            isEditing: false,
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
        isEditing: false,
        errors: true,
      }))
    })
  })

  describe("put", () => {
    it("handles PUT_REQUEST", () => {
      expect(
        profileReducer(undefined, {
          type: types.PUT_REQUEST,
        }),
      ).toEqual(Map({
        isLoading: true,
        isEditing: false,
      }))
    })
    it("handles PUT_SUCCESS", () => {
      expect(
        is(
          profileReducer(undefined, {
            type: types.PUT_SUCCESS,
            data,
          }),
          Map({
            data,
            isLoading: false,
            isEditing: false,
            errors: false,
          }),
        ),
      ).toBeTruthy()
    })
    it("handles PUT_FAILURE", () => {
      expect(
        profileReducer(undefined, {
          type: types.PUT_FAILURE,
        }),
      ).toEqual(Map({
        isLoading: false,
        isEditing: false,
        errors: true,
      }))
    })
  })
})
