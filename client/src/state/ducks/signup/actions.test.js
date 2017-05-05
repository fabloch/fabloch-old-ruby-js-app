import types from "./types"
import actions from "./actions"

describe("signupActions", () => {
  it("signupRequest", () => {
    expect(
      actions.signupRequest(),
    ).toEqual(
      {
        type: types.REQUEST,
      },
    )
  })

  it("signupFailure", () => {
    expect(
      actions.signupFailure({ response: "error" }),
    ).toEqual(
      {
        type: types.FAILURE,
        res: { response: "error" },
      },
    )
  })
})
