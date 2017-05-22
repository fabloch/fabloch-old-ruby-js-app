import moment from "moment"
import utils from "./utils"
import * as alt from "../../../api/fake/subscriptions"

const today = moment.utc("2010-01-01", "YYYY-MM-DD", true)

describe("subscriptions utils", () => {
  describe("subOkHasReubscribed", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subOkHasReubscribed),
      ).toEqual(
        "2011-01-31",
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subOkHasReubscribed, today),
      ).toEqual(
        "dans un an",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subOkHasReubscribed, today),
      ).toEqual(
        395,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subOkHasReubscribed),
      ).toEqual(
        "2009-02-01",
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subOkHasReubscribed, today),
      ).toEqual(
        "il y a un an",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subOkHasReubscribed, today),
      ).toEqual(
        -334,
      )
    })
  })

  describe("subOkInMoreThan90", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subOkInMoreThan90),
      ).toEqual(
        "2010-04-30",
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subOkInMoreThan90, today),
      ).toEqual(
        "dans 4 mois",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subOkInMoreThan90, today),
      ).toEqual(
        119,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subOkInMoreThan90),
      ).toEqual(
        "2009-05-01",
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subOkInMoreThan90, today),
      ).toEqual(
        "il y a 8 mois",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subOkInMoreThan90, today),
      ).toEqual(
        -245,
      )
    })
  })

  describe("subShouldRenew90", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subShouldRenew90),
      ).toEqual(
        "2010-03-29",
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subShouldRenew90, today),
      ).toEqual(
        "dans 3 mois",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subShouldRenew90, today),
      ).toEqual(
        87,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subShouldRenew90),
      ).toEqual(
        "2009-03-30",
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subShouldRenew90, today),
      ).toEqual(
        "il y a 9 mois",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subShouldRenew90, today),
      ).toEqual(
        -277,
      )
    })
  })

  describe("subShouldRenew60", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subShouldRenew60),
      ).toEqual(
        "2010-02-27",
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subShouldRenew60, today),
      ).toEqual(
        "dans 2 mois",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subShouldRenew60, today),
      ).toEqual(
        57,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subShouldRenew60),
      ).toEqual(
        "2009-02-28",
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subShouldRenew60, today),
      ).toEqual(
        "il y a 10 mois",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subShouldRenew60, today),
      ).toEqual(
        -307,
      )
    })
  })

  describe("subShouldRenew30", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subShouldRenew30),
      ).toEqual(
        "2010-01-29",
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subShouldRenew30, today),
      ).toEqual(
        "dans un mois",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subShouldRenew30, today),
      ).toEqual(
        28,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subShouldRenew30),
      ).toEqual(
        "2009-01-30",
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subShouldRenew30, today),
      ).toEqual(
        "il y a un an",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subShouldRenew30, today),
      ).toEqual(
        -336,
      )
    })
  })

  describe("subOut", () => {
    it("memberUntil", () => {
      expect(
        utils.memberUntil(alt.subOut),
      ).toEqual(
        "2009-01-31",
      )
    })

    it("memberUntilFromNow", () => {
      expect(
        utils.memberUntilFromNow(alt.subOut, today),
      ).toEqual(
        "il y a un an",
      )
    })

    it("memberUntilFromNowInDays", () => {
      expect(
        utils.memberUntilFromNowInDays(alt.subOut, today),
      ).toEqual(
        -335,
      )
    })

    it("memberSince", () => {
      expect(
        utils.memberSince(alt.subOut),
      ).toEqual(
        "2007-02-01",
      )
    })

    it("memberSinceFromNow", () => {
      expect(
        utils.memberSinceFromNow(alt.subOut, today),
      ).toEqual(
        "il y a 3 ans",
      )
    })

    it("memberSinceFromNowInDays", () => {
      expect(
        utils.memberSinceFromNowInDays(alt.subOut, today),
      ).toEqual(
        -1065,
      )
    })
  })
})
