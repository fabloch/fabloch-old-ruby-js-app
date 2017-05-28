// import { Map, List } from "immutable"
import * as matchers from "jest-immutable-matchers"
import subscriptionsReducer from "./reducers"
import types from "./types"
import * as alt from "../../../api/fake/subscriptions"
import * as nextStates from "./testNextStates"
import initialState from "./initialState"

describe("subscriptionsReducer", () => {
  beforeEach(() =>
    jest.addMatchers(matchers),
  )

  describe("default state", () => {
    it("has default state", () => {
      expect(
        subscriptionsReducer(undefined, { type: "ANOTHER_ACTION" }),
      ).toEqualImmutable(
        initialState,
      )
    })
  })

  describe("get", () => {
    it("handles FETCH_SUBSCRIPTIONS_REQUEST", () => {
      expect(
        subscriptionsReducer(undefined, {
          type: types.FETCH_SUBSCRIPTIONS_REQUEST,
        }),
      ).toEqualImmutable(
        initialState.set("isFetching", true),
      )
    })
    describe("handles FETCH_SUBSCRIPTIONS_SUCCESS", () => {
      it("subOkInMoreThan90", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data: alt.subOkInMoreThan90,
          }),
        ).toEqualImmutable(
          initialState
          .set("isFetching", false)
          .set("fetchErrors", false)
          .merge(
            nextStates.stateOkInMoreThan90,
          ),
        )
      })

      it("subShouldRenew90", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data: alt.subShouldRenew90,
          }),
        ).toEqualImmutable(
          initialState
          .set("isFetching", false)
          .set("fetchErrors", false)
          .merge(
            nextStates.stateShouldRenew90,
          ),
        )
      })

      it("subShouldRenew60", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data: alt.subShouldRenew60,
          }),
        ).toEqualImmutable(
          initialState
          .set("isFetching", false)
          .set("fetchErrors", false)
          .merge(
            nextStates.stateShouldRenew60,
          ),
        )
      })

      it("subShouldRenew30", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data: alt.subShouldRenew30,
          }),
        ).toEqualImmutable(
          initialState
          .set("isFetching", false)
          .set("fetchErrors", false)
          .merge(
            nextStates.stateShouldRenew30,
          ),
        )
      })

      it("subOut", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
            data: alt.subOut,
          }),
        ).toEqualImmutable(
          initialState
          .set("isFetching", false)
          .set("fetchErrors", false)
          .merge(
            nextStates.stateOut,
          ),
        )
      })
    })
    it("handles FETCH_SUBSCRIPTIONS_FAILURE", () => {
      expect(
        subscriptionsReducer(undefined, {
          type: types.FETCH_SUBSCRIPTIONS_FAILURE,
        }),
      ).toEqualImmutable(
        initialState
        .set("isFetching", false)
        .set("fetchErrors", true)
        ,
      )
    })
  })

  describe("steps", () => {
    describe("handles selectPlan", () => {
      it("with regular", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.SELECT_PLAN,
            plan: "regular",
          }),
        ).toEqualImmutable(
          initialState
          .setIn(["steps", 0, "plan"], "regular")
          .setIn(["steps", 0, "planLocalized"], "particuliers")
          .setIn(["steps", 0, "completed"], true)
          .setIn(["steps", 0, "description"], "Particuliers (20€)")
          .setIn(["steps", 0, "active"], false)
          .setIn(["steps", 1, "disabled"], false)
          .setIn(["steps", 1, "active"], true)
          ,
        )
      })

      it("with pro", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.SELECT_PLAN,
            plan: "pro",
          }),
        ).toEqualImmutable(
          initialState
          .setIn(["steps", 0, "plan"], "pro")
          .setIn(["steps", 0, "planLocalized"], "auto-entrepreneurs et indépendants")
          .setIn(["steps", 0, "description"], "Indépendants (40€)")
          .setIn(["steps", 0, "completed"], true)
          .setIn(["steps", 0, "active"], false)
          .setIn(["steps", 1, "disabled"], false)
          .setIn(["steps", 1, "active"], true)
          ,
        )
      })

      it("with company", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.SELECT_PLAN,
            plan: "company",
          }),
        ).toEqualImmutable(
          initialState
          .setIn(["steps", 0, "plan"], "company")
          .setIn(["steps", 0, "planLocalized"], "entreprises")
          .setIn(["steps", 0, "description"], "Entreprises (100€)")
          .setIn(["steps", 0, "completed"], true)
          .setIn(["steps", 0, "active"], false)
          .setIn(["steps", 1, "disabled"], false)
          .setIn(["steps", 1, "active"], true)
          ,
        )
      })
    })

    describe("handles selectMethod", () => {
      it("checkOrCash", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.SELECT_PAYMENT_METHOD,
            paymentMethod: "checkOrCash",
          }),
        ).toEqualImmutable(
          initialState
          .setIn(["steps", 1, "paymentMethod"], "checkOrCash")
          .setIn(["steps", 1, "paymentMethodLocalized"], "Chèque ou espèces")
          .setIn(["steps", 1, "description"], "Chèque ou espèces")
          .setIn(["steps", 1, "completed"], true)
          .setIn(["steps", 1, "active"], false)
          .setIn(["steps", 2, "disabled"], false)
          .setIn(["steps", 2, "active"], true)
          ,
        )
      })
      it("card", () => {
        expect(
          subscriptionsReducer(undefined, {
            type: types.SELECT_PAYMENT_METHOD,
            paymentMethod: "card",
          }),
        ).toEqualImmutable(
          initialState
          .setIn(["steps", 1, "paymentMethod"], "card")
          .setIn(["steps", 1, "paymentMethodLocalized"], "Carte bancaire")
          .setIn(["steps", 1, "description"], "Carte bancaire")
          .setIn(["steps", 1, "completed"], true)
          .setIn(["steps", 1, "active"], false)
          .setIn(["steps", 2, "disabled"], false)
          .setIn(["steps", 2, "active"], true)
          ,
        )
      })
    })

    it("focusStep", () => {
      expect(
        subscriptionsReducer(undefined, {
          type: types.FOCUS_STEP,
          step: 1,
        }),
      ).toEqualImmutable(
        initialState
        .setIn(["steps", 1, "completed"], false)
        .setIn(["steps", 1, "active"], true)
        .setIn(["steps", 0, "active"], false)
        .setIn(["steps", 2, "active"], false)
        ,
      )
    })
  })
})
