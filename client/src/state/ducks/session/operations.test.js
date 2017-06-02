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
        const timeStamp = store.getActions()[2].notification.timeStamp
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
              timeStamp,
              level: "success",
              title: "Vous êtes connecté.e",
              body: "Bon surf sur le site de la FABrique.",
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
        const timeStamp = store.getActions()[2].notification.timeStamp
        const expectedActions = [
          { type: types.SIGNUP_REQUEST },
          { type: types.SIGNUP_SUCCESS },
          {
            type: notificationTypes.SHOW,
            notification: {
              id,
              timeStamp,
              body: "Vous allez être connecté.e bientôt...",
              level: "success",
              title: "Votre compte a été créé avec succès.",
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

  describe("updateAccount", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it("sends SUCCESS with valid data", () => {
      const store = mockStore({})

      nock("http://localhost")
        .put("/auth")
        .reply(200, { textStatus: "ok" })

      return store.dispatch(operations.updateAccount(data))
      .then(() => {
        const id = store.getActions()[2].notification.id
        const timeStamp = store.getActions()[2].notification.timeStamp
        const expectedActions = [
          { type: types.UPDATE_ACCOUNT_REQUEST },
          {
            type: types.UPDATE_ACCOUNT_SUCCESS,
          },
          {
            type: notificationTypes.SHOW,
            notification: {
              id,
              timeStamp,
              icon: "setting",
              loading: true,
              level: "success",
              title: "Vos identifiants de connexion ont bien été mis à jour.",
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

  describe("passwordReset", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it("sends SUCCESS with valid data", () => {
      const email = { email: "user@example.com" }
      const store = mockStore({})

      nock("http://localhost")
        .post("/auth/password")
        .reply(201, { textStatus: "ok" })

      return store.dispatch(operations.passwordReset(email))
      .then(() => {
        const id = store.getActions()[2].notification.id
        const timeStamp = store.getActions()[2].notification.timeStamp
        const expectedActions = [
          { type: types.PASSWORD_RESET_REQUEST },
          {
            type: types.PASSWORD_RESET_SUCCESS,
          },
          {
            type: notificationTypes.SHOW,
            notification: {
              id,
              timeStamp,
              icon: "setting",
              loading: true,
              level: "info",
              title: "Un email vous a été envoyé pour réinitialiser votre mot de passe.",
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

  describe("updatePassword", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it("sends SUCCESS with valid data", () => {
      const passwords = {
        password: "motdepasse",
        password_confirmation: "motdepasse",
      }
      const store = mockStore({})

      nock("http://localhost")
        .put("/auth/password")
        .reply(200, { textStatus: "ok" })

      return store.dispatch(operations.updatePassword(passwords))
      .then(() => {
        const id = store.getActions()[2].notification.id
        const timeStamp = store.getActions()[2].notification.timeStamp
        const expectedActions = [
          { type: types.UPDATE_PASSWORD_REQUEST },
          {
            type: types.UPDATE_PASSWORD_SUCCESS,
          },
          {
            type: notificationTypes.SHOW,
            notification: {
              id,
              timeStamp,
              icon: "setting",
              loading: true,
              level: "success",
              title: "Votre mot de passe a bien été mis à jour.",
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

  describe("logout", () => {
    it("sends logout action", () => {
      const store = mockStore({})

      store.dispatch(operations.logout())

      const id = store.getActions()[1].notification.id
      const timeStamp = store.getActions()[1].notification.timeStamp
      const expectedActions = [
        { type: types.LOGOUT },
        {
          type: notificationTypes.SHOW,
          notification: {
            id,
            timeStamp,
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
