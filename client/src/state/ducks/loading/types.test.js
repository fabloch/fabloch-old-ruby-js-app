import types from "./types"

describe("loading types", () => {
  it("START", () => {
    expect(
      types.START,
    ).toEqual(
      "fabloch/loading/START",
    )
  })

  it("STOP", () => {
    expect(
      types.STOP,
    ).toEqual(
      "fabloch/loading/STOP",
    )
  })
})
