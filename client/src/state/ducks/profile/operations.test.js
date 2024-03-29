import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import nock from "nock"

import types from "./types"
import operations from "./operations"
import mockLocalStorage from "../../../utils/mockLocalStorage"

mockLocalStorage()
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const data = {
  username: "seb_nicolaidis",
  firstname: "Sébastien",
  lastname: "Nicolaïdis",
  description: "Description",
  birthdate: "1979-09-13",
}

describe("profileOperations", () => {
  describe("fetchprofile", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    describe("when profile exists", () => {
      it("triggers FETCH_SUCCESS with profile infos", () => {
        const store = mockStore({})

        nock("http://localhost")
        .get("/v1/profile")
        .reply(
          200,
          data,
        )

        return store.dispatch(operations.fetchProfile())
        .then(() => { // return of async operations
          const expectedActions = [
            { type: types.FETCH_REQUEST },
            {
              type: types.FETCH_SUCCESS,
              data,
            },
          ]

          expect(store.getActions()[0]).toEqual(expectedActions[0])
          expect(store.getActions()[1]).toEqual(expectedActions[1])
        })
      })
    })

    describe("when profile does not exit", () => {
      it("triggers FETCH_FAILURE", () => {
        const store = mockStore({})

        nock("http://localhost")
        .get("/v1/profile")
        .reply(
          404,
        )

        return store.dispatch(operations.fetchProfile())
        .then(() => { // return of async operations
          const expectedActions = [
            { type: types.FETCH_REQUEST },
            {
              type: types.FETCH_FAILURE,
              error: { status: 404, statusText: "Not Found" },
            },
          ]

          expect(store.getActions()[0]).toEqual(expectedActions[0])
          expect(store.getActions()[1]).toEqual(expectedActions[1])
        })
      })
    })
  })

  describe("editing", () => {
    it("toggleEdit", () => {
      expect(
        operations.toggleEdit(),
      ).toEqual(
        {
          type: types.TOGGLE_EDIT,
        },
      )
    })
  })


  describe("postProfile", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    describe("with valid form", () => {
      it("triggers POST_SUCCESS with profile infos", () => {
        const store = mockStore({})

        nock("http://localhost")
        .post("/v1/profile")
        .reply(
          201,
          data,
        )

        return store.dispatch(operations.postProfile(data))
        .then(() => { // return of async operations
          const expectedActions = [
            { type: types.POST_REQUEST },
            {
              type: types.POST_SUCCESS,
              data,
            },
          ]


          expect(store.getActions()[0]).toEqual(expectedActions[0])
          expect(store.getActions()[1]).toEqual(expectedActions[1])
        })
      })
    })

    describe("with invalid form", () => {
      xit("triggers POST_FAILURE", () => {
        const wrongData = {
          firstname: "Sébastien",
          lastname: "Nicolaïdis",
          description: "Description",
          birthdate: "1979-09-13",
        }

        const store = mockStore({})

        nock("http://localhost")
        .post("/v1/profile")
        .reply(
          422,
          {
            username: [
              "can't be blank",
              "only allows lowercase letters or \"_\"",
              "is too short (minimum is 3 characters)",
            ],
          },
        )

        return store.dispatch(operations.postProfile(wrongData))
        .then(() => { // return of async operations
          const expectedActions = [
            { type: types.POST_REQUEST },
            {
              type: types.POST_FAILURE,
              error: { status: 404, statusText: "Not Found" },
            },
          ]

          expect(store.getActions()[0]).toEqual(expectedActions[0])
          expect(store.getActions()[1]).toEqual(expectedActions[1])
        })
      })
    })

    describe("putProfile", () => {
      afterEach(() => {
        nock.cleanAll()
      })

      describe("with valid form", () => {
        it("triggers POST_SUCCESS with profile infos", () => {
          const store = mockStore({})

          nock("http://localhost")
          .put("/v1/profile")
          .reply(
            201,
            data,
          )

          return store.dispatch(operations.putProfile(data))
          .then(() => { // return of async operations
            const expectedActions = [
              { type: types.PUT_REQUEST },
              {
                type: types.PUT_SUCCESS,
                data,
              },
            ]


            expect(store.getActions()[0]).toEqual(expectedActions[0])
            expect(store.getActions()[1]).toEqual(expectedActions[1])
          })
        })
      })

      describe("with invalid form", () => {
        xit("triggers PUT_FAILURE", () => {
          const wrongData = {
            firstname: "Sébastien",
            lastname: "Nicolaïdis",
            description: "Description",
            birthdate: "1979-09-13",
          }

          const store = mockStore({})

          nock("http://localhost")
          .put("/v1/profile")
          .reply(
            422,
            {
              username: [
                "can't be blank",
                "only allows lowercase letters or \"_\"",
                "is too short (minimum is 3 characters)",
              ],
            },
          )

          return store.dispatch(operations.putProfile(wrongData))
          .then(() => { // return of async operations
            const expectedActions = [
              { type: types.PUT_REQUEST },
              {
                type: types.PUT_FAILURE,
                error: { status: 404, statusText: "Not Found" },
              },
            ]

            expect(store.getActions()[0]).toEqual(expectedActions[0])
            expect(store.getActions()[1]).toEqual(expectedActions[1])
          })
        })
      })
    })
  })
})
