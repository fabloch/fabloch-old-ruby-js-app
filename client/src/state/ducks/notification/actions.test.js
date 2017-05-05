import types from "./types"
import actions from "./actions"

describe("notificationActions", () => {
  it("showNotification", () => {
    expect(
      actions.showNotification({ some: "notification" }),
    ).toEqual(
      {
        type: types.SHOW,
        notification: { some: "notification" },
      },
    )
  })

  it("hideNotification", () => {
    expect(
      actions.hideNotification(10),
    ).toEqual(
      {
        type: types.HIDE,
        id: 10,
      },
    )
  })
})
