import { Map, List, fromJS } from "immutable"
import * as alt from "../../../api/fake/subscriptions"
import { todayString, todayPlusAYearString } from "../../../utils/dateAndTime"

export const stateOkHasReubscribed = Map({
  present: fromJS({
    plan: "regular",
    memberUntil: alt.plus100end,
    memberUntilFromNow: "dans 3 mois",
    memberUntilFromNowInDays: 100,
    memberSince: alt.plus100start2,
    memberSinceFromNow: "il y a 2 ans",
    memberSinceFromNowInDays: -630,
    shouldResubscribe: null,
  }),
  all: fromJS([
    {
      plan: "regular",
      startDate: alt.plus100start,
      endDate: alt.plus100end,
      priceCents: 2000,
      paymentMethod: "checkOrCash",
      pending: false,
    },
    {
      plan: "regular",
      startDate: alt.plus100start2,
      endDate: alt.plus100end2,
      priceCents: 2000,
      paymentMethod: "checkOrCash",
      pending: false,
    },
  ]),
  create: fromJS({
    startDate: alt.plus100newStart,
    endDate: alt.plus100newEnd,
  }),
})

export const stateOkInMoreThan90 = Map({
  present: fromJS({
    plan: "regular",
    memberUntil: alt.plus100end,
    memberUntilFromNow: "dans 3 mois",
    memberUntilFromNowInDays: 100,
    memberSince: alt.plus100start,
    memberSinceFromNow: "il y a 9 mois",
    memberSinceFromNowInDays: -264,
    shouldResubscribe: null,
  }),
  all: fromJS([
    {
      plan: "regular",
      startDate: alt.plus100start,
      endDate: alt.plus100end,
      priceCents: 2000,
      paymentMethod: "checkOrCash",
      pending: false,
    },
  ]),
  create: fromJS({
    startDate: alt.plus100newStart,
    endDate: alt.plus100newEnd,
  }),
})

export const stateShouldRenew90 = Map({
  present: fromJS({
    plan: "regular",
    memberUntil: alt.plus70end,
    memberUntilFromNow: "dans 2 mois",
    memberUntilFromNowInDays: 70,
    memberSince: alt.plus70start,
    memberSinceFromNow: "il y a 10 mois",
    memberSinceFromNowInDays: -294,
    shouldResubscribe: "info",
  }),
  all: fromJS([
    {
      plan: "regular",
      startDate: alt.plus70start,
      endDate: alt.plus70end,
      priceCents: 2000,
      paymentMethod: "checkOrCash",
      pending: false,
    },
  ]),
  create: fromJS({
    startDate: alt.plus70newStart,
    endDate: alt.plus70newEnd,
  }),
})

export const stateShouldRenew60 = Map({
  present: fromJS({
    plan: "regular",
    memberUntil: alt.plus50end,
    memberUntilFromNow: "dans 2 mois",
    memberUntilFromNowInDays: 50,
    memberSince: alt.plus50start,
    memberSinceFromNow: "il y a 10 mois",
    memberSinceFromNowInDays: -314,
    shouldResubscribe: "warning",
  }),
  all: fromJS([
    {
      plan: "regular",
      startDate: alt.plus50start,
      endDate: alt.plus50end,
      priceCents: 2000,
      paymentMethod: "checkOrCash",
      pending: false,
    },
  ]),
  create: fromJS({
    startDate: alt.plus50newStart,
    endDate: alt.plus50newEnd,
  }),
})

export const stateShouldRenew30 = Map({
  present: fromJS({
    plan: "regular",
    memberUntil: alt.plus10end,
    memberUntilFromNow: "dans 9 jours",
    memberUntilFromNowInDays: 9,
    memberSince: alt.plus10start,
    memberSinceFromNow: "il y a un an",
    memberSinceFromNowInDays: -355,
    shouldResubscribe: "error",
  }),
  all: fromJS([
    {
      plan: "regular",
      startDate: alt.plus10start,
      endDate: alt.plus10end,
      priceCents: 2000,
      paymentMethod: "checkOrCash",
      pending: false,
    },
  ]),
  create: fromJS({
    startDate: alt.plus10newStart,
    endDate: alt.plus10newEnd,
  }),
})

export const stateOut = Map({
  present: fromJS({
    plan: "regular",
    memberUntil: alt.minus10end,
    memberUntilFromNow: "il y a 10 jours",
    memberUntilFromNowInDays: -10,
    memberSince: alt.minus10start2,
    memberSinceFromNow: "il y a 2 ans",
    memberSinceFromNowInDays: -740,
    shouldResubscribe: "error",
  }),
  all: fromJS([
    {
      plan: "regular",
      startDate: alt.minus10start,
      endDate: alt.minus10end,
      priceCents: 2000,
      paymentMethod: "checkOrCash",
      pending: false,
    },
    {
      plan: "regular",
      startDate: alt.minus10start2,
      endDate: alt.minus10end2,
      priceCents: 2000,
      paymentMethod: "checkOrCash",
      pending: false,
    },
  ]),
  create: fromJS({
    startDate: alt.minus10newStart,
    endDate: alt.minus10newEnd,
  }),
})

export const virgin = Map({
  present: Map({}),
  all: List(),
  create: fromJS({
    startDate: todayString,
    endDate: todayPlusAYearString,
  }),
})
