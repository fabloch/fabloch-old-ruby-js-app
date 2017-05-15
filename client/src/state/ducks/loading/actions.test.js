import types from "./types"
import actions from "./actions"

describe("loadingActions", () => {
  it("startLoading", () => {
    expect(
      actions.startLoading(),
    ).toEqual(
      {
        type: types.START,
      },
    )
  })

  it("stopLoading", () => {
    expect(
      actions.stopLoading(),
    ).toEqual(
      {
        type: types.STOP,
      },
    )
  })
})
