import types from "./types"
import actions from "./actions"

const data = {
  username: "seb_nicolaidis",
}
const errors = ["error1", "error2"]
const error = {
  status: 404,
  statusText: "Not Found",
}

describe("profileActions", () => {
  describe("fetch", () => {
    it("fetchProfileRequest", () => {
      expect(
        actions.fetchProfileRequest(),
      ).toEqual(
        {
          type: types.FETCH_REQUEST,
        },
      )
    })

    it("fetchProfileFailure", () => {
      expect(
        actions.fetchProfileFailure(error),
      ).toEqual(
        {
          type: types.FETCH_FAILURE,
          error,
        },
      )
    })

    it("fetchProfileSuccess", () => {
      expect(
        actions.fetchProfileSuccess(data),
      ).toEqual(
        {
          type: types.FETCH_SUCCESS,
          data,
        },
      )
    })
  })

  describe("editing", () => {
    it("toggleEditing", () => {
      expect(
        actions.toggleEditing(),
      ).toEqual(
        {
          type: types.TOGGLE_EDITING,
        },
      )
    })
  })

  describe("post", () => {
    it("postProfileRequest", () => {
      expect(
        actions.postProfileRequest(),
      ).toEqual(
        {
          type: types.POST_REQUEST,
        },
      )
    })

    it("postProfileFailure", () => {
      expect(
        actions.postProfileFailure(errors),
      ).toEqual(
        {
          type: types.POST_FAILURE,
          errors,
        },
      )
    })

    it("postProfileSuccess", () => {
      expect(
        actions.postProfileSuccess(data),
      ).toEqual(
        {
          type: types.POST_SUCCESS,
          data,
        },
      )
    })
  })

  describe("put", () => {
    it("putProfileRequest", () => {
      expect(
        actions.putProfileRequest(),
      ).toEqual(
        {
          type: types.PUT_REQUEST,
        },
      )
    })

    it("putProfileFailure", () => {
      expect(
        actions.putProfileFailure(errors),
      ).toEqual(
        {
          type: types.PUT_FAILURE,
          errors,
        },
      )
    })

    it("putProfileSuccess", () => {
      expect(
        actions.putProfileSuccess(data),
      ).toEqual(
        {
          type: types.PUT_SUCCESS,
          data,
        },
      )
    })
  })

  describe("delete", () => {
    it("deleteProfileRequest", () => {
      expect(
        actions.deleteProfileRequest(),
      ).toEqual(
        {
          type: types.DELETE_REQUEST,
        },
      )
    })

    it("deleteProfileFailure", () => {
      expect(
        actions.deleteProfileFailure(errors),
      ).toEqual(
        {
          type: types.DELETE_FAILURE,
          errors,
        },
      )
    })

    it("deleteProfileSuccess", () => {
      expect(
        actions.deleteProfileSuccess(),
      ).toEqual(
        {
          type: types.DELETE_SUCCESS,
        },
      )
    })
  })
})
