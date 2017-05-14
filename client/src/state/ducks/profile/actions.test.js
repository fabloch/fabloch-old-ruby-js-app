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
  describe("get", () => {
    it("getProfileRequest", () => {
      expect(
        actions.getProfileRequest(),
      ).toEqual(
        {
          type: types.GET_REQUEST,
        },
      )
    })

    it("getProfileFailure", () => {
      expect(
        actions.getProfileFailure(error),
      ).toEqual(
        {
          type: types.GET_FAILURE,
          error,
        },
      )
    })

    it("getProfileSuccess", () => {
      expect(
        actions.getProfileSuccess(data),
      ).toEqual(
        {
          type: types.GET_SUCCESS,
          data,
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
        actions.putProfileSuccess(),
      ).toEqual(
        {
          type: types.PUT_SUCCESS,
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
