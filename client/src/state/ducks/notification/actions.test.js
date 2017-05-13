import types from "./types"
import actions from "./actions"

describe("notificationActions", () => {
  it("showNotification", () => {
    expect(
      actions.showNotification({ id: "someId", some: "data" }),
    ).toEqual(
      {
        type: types.SHOW,
        notification: { id: "someId", some: "data" },
      },
    )
  })

  it("hideNotification", () => {
    expect(
      actions.hideNotification("someId"),
    ).toEqual(
      {
        type: types.HIDE,
        id: "someId",
      },
    )
  })
})
