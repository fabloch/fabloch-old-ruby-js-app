import { Map } from "immutable"
import * as matchers from "jest-immutable-matchers"
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
  beforeEach(() =>
    jest.addMatchers(matchers),
  )

  describe("default state", () => {
    it("has default state", () => {
      expect(
        profileReducer(undefined, { type: "ANOTHER_ACTION" }),
      ).toEqualImmutable(
        Map({
          isFetching: false,
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
      ).toEqualImmutable(Map({
        isFetching: true,
        isEditing: false,
      }))
    })
    it("handles FETCH_SUCCESS", () => {
      expect(
        profileReducer(undefined, {
          type: types.FETCH_SUCCESS,
          data,
        }),
      ).toEqualImmutable(
        Map({
          data,
          isFetching: false,
          isEditing: false,
          fetchingError: false,
        }),
      )
    })
    it("handles FETCH_FAILURE", () => {
      expect(
        profileReducer(undefined, {
          type: types.FETCH_FAILURE,
        }),
      ).toEqualImmutable(Map({
        isFetching: false,
        isEditing: false,
        fetchingError: true,
      }))
    })
  })

  describe("edit", () => {
    it("handles TOGGLE_EDIT false to true", () => {
      const initialState = Map({
        isFetching: false,
        isEditing: false,
      })
      expect(
        profileReducer(initialState, {
          type: types.TOGGLE_EDIT,
        }),
      ).toEqualImmutable(Map({
        isFetching: false,
        isEditing: true,
      }))
    })
    it("handles TOGGLE_EDIT true to false", () => {
      const initialState = Map({
        isFetching: false,
        isEditing: true,
      })
      expect(
        profileReducer(initialState, {
          type: types.TOGGLE_EDIT,
        }),
      ).toEqualImmutable(Map({
        isFetching: false,
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
      ).toEqualImmutable(Map({
        isFetching: true,
        isEditing: false,
      }))
    })
    it("handles POST_SUCCESS", () => {
      expect(
        profileReducer(undefined, {
          type: types.POST_SUCCESS,
          data,
        }),
      ).toEqualImmutable(
        Map({
          data,
          isFetching: false,
          isEditing: false,
          fetchingError: false,
        }),
      )
    })
    it("handles POST_FAILURE", () => {
      expect(
        profileReducer(undefined, {
          type: types.POST_FAILURE,
        }),
      ).toEqual(Map({
        isFetching: false,
        isEditing: false,
        fetchingError: true,
      }))
    })
  })

  describe("put", () => {
    it("handles PUT_REQUEST", () => {
      expect(
        profileReducer(undefined, {
          type: types.PUT_REQUEST,
        }),
      ).toEqualImmutable(Map({
        isFetching: true,
        isEditing: false,
      }))
    })
    it("handles PUT_SUCCESS", () => {
      expect(
        profileReducer(undefined, {
          type: types.PUT_SUCCESS,
          data,
        }),
      ).toEqualImmutable(
        Map({
          data,
          isFetching: false,
          isEditing: false,
          fetchingError: false,
        }),
      )
    })
    it("handles PUT_FAILURE", () => {
      expect(
        profileReducer(undefined, {
          type: types.PUT_FAILURE,
        }),
      ).toEqualImmutable(
        Map({
          isFetching: false,
          isEditing: false,
          fetchingError: true,
        }),
      )
    })
  })
})
