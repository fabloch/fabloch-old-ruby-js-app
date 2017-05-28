import utils from "./utils"
import * as alt from "../../../api/fake/subscriptions"

describe("subscriptions utils", () => {
  describe("subOkHasResubscribed", () => {
    it("plan", () => {
      expect(
        utils.plan(alt.subOkHasResubscribed),
      ).toEqual(
        "regular",
      )
    })

    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subOkHasResubscribed),
      ).toEqual(
        alt.plus100end,
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subOkHasResubscribed),
      ).toEqual(
        "dans 3 mois",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subOkHasResubscribed),
      ).toEqual(
        99,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subOkHasResubscribed),
      ).toEqual(
        alt.plus100start2,
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subOkHasResubscribed),
      ).toEqual(
        "il y a 2 ans",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subOkHasResubscribed),
      ).toEqual(
        -630,
      )
    })

    it("shouldResubscribe", () => {
      expect(
        utils.shouldResubscribe(alt.subOkHasResubscribed),
      ).toEqual(
        null,
      )
    })

    it("newSubscriptionStart", () => {
      expect(
        utils.newSubscriptionStart(alt.subOkHasResubscribed),
      ).toEqual(
        alt.plus100newStart,
      )
    })

    it("newSubscriptionEnd", () => {
      expect(
        utils.newSubscriptionEnd(alt.subOkHasResubscribed),
      ).toEqual(
        alt.plus100newEnd,
      )
    })
  })

  describe("subOkInMoreThan90", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subOkInMoreThan90),
      ).toEqual(
        alt.plus100end,
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subOkInMoreThan90),
      ).toEqual(
        "dans 3 mois",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subOkInMoreThan90),
      ).toEqual(
        99,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subOkInMoreThan90),
      ).toEqual(
        alt.plus100start,
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subOkInMoreThan90),
      ).toEqual(
        "il y a 9 mois",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subOkInMoreThan90),
      ).toEqual(
        -264,
      )
    })

    it("shouldResubscribe", () => {
      expect(
        utils.shouldResubscribe(alt.subOkInMoreThan90),
      ).toEqual(
        null,
      )
    })

    it("newSubscriptionStart", () => {
      expect(
        utils.newSubscriptionStart(alt.subOkInMoreThan90),
      ).toEqual(
        alt.plus100newStart,
      )
    })

    it("newSubscriptionEnd", () => {
      expect(
        utils.newSubscriptionEnd(alt.subOkInMoreThan90),
      ).toEqual(
        alt.plus100newEnd,
      )
    })
  })

  describe("subShouldRenew90", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subShouldRenew90),
      ).toEqual(
        alt.plus70end,
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subShouldRenew90),
      ).toEqual(
        "dans 2 mois",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subShouldRenew90),
      ).toEqual(
        69,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subShouldRenew90),
      ).toEqual(
        alt.plus70start,
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subShouldRenew90),
      ).toEqual(
        "il y a 10 mois",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subShouldRenew90),
      ).toEqual(
        -294,
      )
    })

    it("shouldResubscribe", () => {
      expect(
        utils.shouldResubscribe(alt.subShouldRenew90),
      ).toEqual(
        "info",
      )
    })

    it("newSubscriptionStart", () => {
      expect(
        utils.newSubscriptionStart(alt.subShouldRenew90),
      ).toEqual(
        alt.plus70newStart,
      )
    })

    it("newSubscriptionEnd", () => {
      expect(
        utils.newSubscriptionEnd(alt.subShouldRenew90),
      ).toEqual(
        alt.plus70newEnd,
      )
    })
  })

  describe("subShouldRenew60", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subShouldRenew60),
      ).toEqual(
        alt.plus50end,
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subShouldRenew60),
      ).toEqual(
        "dans 2 mois",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subShouldRenew60),
      ).toEqual(
        49,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subShouldRenew60),
      ).toEqual(
        alt.plus50start,
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subShouldRenew60),
      ).toEqual(
        "il y a 10 mois",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subShouldRenew60),
      ).toEqual(
        -314,
      )
    })

    it("shouldResubscribe", () => {
      expect(
        utils.shouldResubscribe(alt.subShouldRenew60),
      ).toEqual(
        "warning",
      )
    })

    it("newSubscriptionStart", () => {
      expect(
        utils.newSubscriptionStart(alt.subShouldRenew60),
      ).toEqual(
        alt.plus50newStart,
      )
    })

    it("newSubscriptionEnd", () => {
      expect(
        utils.newSubscriptionEnd(alt.subShouldRenew60),
      ).toEqual(
        alt.plus50newEnd,
      )
    })
  })

  describe("subShouldRenew30", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subShouldRenew30),
      ).toEqual(
        alt.plus10end,
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subShouldRenew30),
      ).toEqual(
        "dans 9 jours",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subShouldRenew30),
      ).toEqual(
        9,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subShouldRenew30),
      ).toEqual(
        alt.plus10start,
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subShouldRenew30),
      ).toEqual(
        "il y a un an",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subShouldRenew30),
      ).toEqual(
        -354,
      )
    })

    it("shouldResubscribe", () => {
      expect(
        utils.shouldResubscribe(alt.subShouldRenew30),
      ).toEqual(
        "error",
      )
    })

    it("newSubscriptionStart", () => {
      expect(
        utils.newSubscriptionStart(alt.subShouldRenew30),
      ).toEqual(
        alt.plus10newStart,
      )
    })

    it("newSubscriptionEnd", () => {
      expect(
        utils.newSubscriptionEnd(alt.subShouldRenew30),
      ).toEqual(
        alt.plus10newEnd,
      )
    })
  })

  describe("subOut", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subOut),
      ).toEqual(
        alt.minus10end,
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subOut),
      ).toEqual(
        "il y a 11 jours",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subOut),
      ).toEqual(
        -10,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subOut),
      ).toEqual(
        alt.minus10start2,
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subOut),
      ).toEqual(
        "il y a 2 ans",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subOut),
      ).toEqual(
        -740,
      )
    })

    it("shouldResubscribe", () => {
      expect(
        utils.shouldResubscribe(alt.subOut),
      ).toEqual(
        "error",
      )
    })

    it("newSubscriptionStart", () => {
      expect(
        utils.newSubscriptionStart(alt.subOut),
      ).toEqual(
        alt.minus10newStart,
      )
    })

    it("newSubscriptionEnd", () => {
      expect(
        utils.newSubscriptionEnd(alt.subOut),
      ).toEqual(
        alt.minus10newEnd,
      )
    })
  })
})
