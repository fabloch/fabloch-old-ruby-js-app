import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import types from "./types"
import operations from "./operations"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const notification = {
  level: "success",
  header: "Login successful",
  content: "Login was successful",
}

describe("addNotification action", () => {
  it("creates showNotification action and then hideNotification action", () => {
    jest.useFakeTimers()

    const store = mockStore({})

    store.dispatch(operations.addNotification(notification))

    const id = store.getActions()[0].notification.id
    const timeStamp = store.getActions()[0].notification.timeStamp
    const notificationWithId = { ...notification, id, timeStamp }

    jest.runAllTimers()

    const expectedActions = [
      { type: types.SHOW, notification: notificationWithId },
      { type: types.HIDE, id },
    ]


    expect(store.getActions()).toMatchObject(expectedActions)
  })
})
