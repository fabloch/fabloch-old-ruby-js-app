import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import types from "./types"
import operations from "./operations"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const notification = {
  id: "some_id",
  level: "success",
  header: "Login successful",
  content: "Login was successful",
}

describe("addNotification action", () => {
  it("creates showNotification action and then hideNotification action", () => {
    jest.useFakeTimers()

    const expectedActions = [
      { type: types.SHOW, notification },
      { type: types.HIDE, id: notification.id },
    ]

    const store = mockStore({})

    store.dispatch(operations.addNotification(notification))

    jest.runAllTimers()

    expect(store.getActions()).toEqual(expectedActions)
  })
})
