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
  describe("getprofile", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    describe("when profile exits", () => {
      it("triggers GET_SUCCESS with profile infos", () => {
        const store = mockStore({})

        nock("http://localhost")
        .get("/profile")
        .reply(
          200,
          data,
        )

        return store.dispatch(operations.getProfile())
        .then(() => { // return of async operations
          const expectedActions = [
            { type: types.GET_REQUEST },
            {
              type: types.GET_SUCCESS,
              data,
            },
          ]


          expect(store.getActions()[0]).toEqual(expectedActions[0])
          expect(store.getActions()[1]).toEqual(expectedActions[1])
        })
      })
    })

    describe("when profile does not exit", () => {
      it("triggers GET_FAILURE", () => {
        const store = mockStore({})

        nock("http://localhost")
        .get("/profile")
        .reply(
          404,
        )

        return store.dispatch(operations.getProfile())
        .then(() => { // return of async operations
          const expectedActions = [
            { type: types.GET_REQUEST },
            {
              type: types.GET_FAILURE,
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
