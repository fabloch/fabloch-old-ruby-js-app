import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import nock from "nock"
import types from "./types"
import notificationTypes from "../notification/types"
import operations from "./operations"
import mockLocalStorage from "../../../utils/mockLocalStorage"

mockLocalStorage()
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const data = {
  email: "user@example.com",
  password: "password",
}

describe("sessionpOperations", () => {
  describe("login", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it("sets authHeaders for axios and current user", () => {
      const store = mockStore({})

      nock("http://localhost")
      .post("/auth/sign_in")
      .reply(
        200,
        {
          textStatus: "ok",
        },
        {
          client: "abcdef",
          uid: "ghijkl",
          "access-token": "mnopqr",
          expiry: "123456",
        },
      )

      return store.dispatch(operations.login(data))
      .then(() => { // return of async operations
        const id = store.getActions()[2].notification.id
        const expectedActions = [
          { type: types.LOGIN_REQUEST },
          {
            type: types.LOGIN_SUCCESS,
            data: {
              client: "abcdef",
              uid: "ghijkl",
              token: "mnopqr",
              expiry: "123456",
            },
          },
          {
            type: notificationTypes.SHOW,
            notification: {
              id,
              level: "success",
              title: "Log in successful",
              body: "Enjoy your ride.",
            },
          },
        ]


        expect(store.getActions()[0]).toEqual(expectedActions[0])
        expect(store.getActions()[1]).toEqual(expectedActions[1])
        expect(store.getActions()[2]).toEqual(expectedActions[2])
      })
    })
  })

  describe("signup", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it("creates SUCCESS when valid form has been sent", () => {
      const store = mockStore({})

      nock("http://localhost")
        .post("/auth")
        .reply(200, { body: { textStatus: "ok" } })


      return store.dispatch(operations.signup(data))
      .then(() => { // return of async operations
        const id = store.getActions()[2].notification.id
        const expectedActions = [
          { type: types.SIGNUP_REQUEST },
          { type: types.SIGNUP_SUCCESS },
          {
            type: notificationTypes.SHOW,
            notification: {
              id,
              body: "Account created successfully.",
              level: "success",
              title: "Account created",
            },
          },
        ]


        expect(store.getActions()[0]).toEqual(expectedActions[0])
        expect(store.getActions()[1]).toEqual(expectedActions[1])
        expect(store.getActions()[2]).toEqual(expectedActions[2])
      })
    })

    xit("creates a SubmissionError when user already exists", () => {
      const store = mockStore({})

      nock("http://localhost")
        .post("/auth")
        .reply(422, { errors: { textStatus: "ok" } })


      expect.assertions(1)
      return store.dispatch(operations.signup(data)).catch(e =>
        expect(e).toEqual({
          error: "User with 2 not found.",
        }),
      )
    })
  })

  describe("current user", () => {
    it("setCurrentUser", () => {
      expect(
        operations.setCurrentUser(data),
      ).toEqual(
        {
          type: types.SET_CURRENT_USER,
          data,
        },
      )
    })

    it("removeCurrentUser", () => {
      expect(
        operations.removeCurrentUser(),
      ).toEqual(
        {
          type: types.REMOVE_CURRENT_USER,
        },
      )
    })
  })

  describe("logout", () => {
    it("sends logout action", () => {
      const store = mockStore({})

      store.dispatch(operations.logout())

      const id = store.getActions()[1].notification.id
      const expectedActions = [
        { type: types.LOGOUT },
        {
          type: notificationTypes.SHOW,
          notification: {
            id,
            level: "success",
            title: "Successfully disconnected",
            body: "You have been disconnected successfully.",
          },
        },
      ]
      expect(store.getActions()[0]).toEqual(expectedActions[0])
      expect(store.getActions()[1]).toEqual(expectedActions[1])
    })
  })
})
