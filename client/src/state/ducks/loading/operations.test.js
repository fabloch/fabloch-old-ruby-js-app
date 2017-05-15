import types from "./types"
import operations from "./operations"

describe("loadingActions", () => {
  it("startLoading", () => {
    expect(
      operations.startLoading(),
    ).toEqual(
      {
        type: types.START,
      },
    )
  })

  it("stopLoading", () => {
    expect(
      operations.stopLoading(),
    ).toEqual(
      {
        type: types.STOP,
      },
    )
  })
})
