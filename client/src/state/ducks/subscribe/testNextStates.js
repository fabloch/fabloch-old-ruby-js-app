import { Map, fromJS } from "immutable"
import * as alt from "../../../api/fake/subscriptions"

export const stateOkHasReubscribed = Map({
  subscriptions: fromJS({
    type: "regular",
    memberUntil: alt.plus100end,
    memberUntilFromNow: "dans 3 mois",
    memberUntilFromNowInDays: 99,
    memberSince: alt.plus100start2,
    memberSinceFromNow: "il y a 2 ans",
    memberSinceFromNowInDays: -630,
    shouldResubscribe: null,
    allMemberships: [
      {
        type: "regular",
        startDate: alt.plus100start,
        endDate: alt.plus100end,
        price: "20",
        paymentMethod: "cash",
      },
      {
        type: "regular",
        startDate: alt.plus100start2,
        endDate: alt.plus100end2,
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})

export const stateOkInMoreThan90 = Map({
  subscriptions: fromJS({
    type: "regular",
    memberUntil: alt.plus100end,
    memberUntilFromNow: "dans 3 mois",
    memberUntilFromNowInDays: 99,
    memberSince: alt.plus100start,
    memberSinceFromNow: "il y a 9 mois",
    memberSinceFromNowInDays: -264,
    shouldResubscribe: null,
    allMemberships: [
      {
        type: "regular",
        startDate: alt.plus100start,
        endDate: alt.plus100end,
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})

export const stateShouldRenew90 = Map({
  subscriptions: fromJS({
    type: "regular",
    memberUntil: alt.plus70end,
    memberUntilFromNow: "dans 2 mois",
    memberUntilFromNowInDays: 69,
    memberSince: alt.plus70start,
    memberSinceFromNow: "il y a 10 mois",
    memberSinceFromNowInDays: -294,
    shouldResubscribe: "info",
    allMemberships: [
      {
        type: "regular",
        startDate: alt.plus70start,
        endDate: alt.plus70end,
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})

export const stateShouldRenew60 = Map({
  subscriptions: fromJS({
    type: "regular",
    memberUntil: alt.plus50end,
    memberUntilFromNow: "dans 2 mois",
    memberUntilFromNowInDays: 49,
    memberSince: alt.plus50start,
    memberSinceFromNow: "il y a 10 mois",
    memberSinceFromNowInDays: -314,
    shouldResubscribe: "warning",
    allMemberships: [
      {
        type: "regular",
        startDate: alt.plus50start,
        endDate: alt.plus50end,
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})

export const stateShouldRenew30 = Map({
  subscriptions: fromJS({
    type: "regular",
    memberUntil: alt.plus10end,
    memberUntilFromNow: "dans 9 jours",
    memberUntilFromNowInDays: 9,
    memberSince: alt.plus10start,
    memberSinceFromNow: "il y a un an",
    memberSinceFromNowInDays: -354,
    shouldResubscribe: "error",
    allMemberships: [
      {
        type: "regular",
        startDate: alt.plus10start,
        endDate: alt.plus10end,
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})

export const stateOut = Map({
  subscriptions: fromJS({
    type: "regular",
    memberUntil: alt.minus10end,
    memberUntilFromNow: "il y a 11 jours",
    memberUntilFromNowInDays: -10,
    memberSince: alt.minus10start2,
    memberSinceFromNow: "il y a 2 ans",
    memberSinceFromNowInDays: -740,
    shouldResubscribe: "error",
    allMemberships: [
      {
        type: "regular",
        startDate: alt.minus10start,
        endDate: alt.minus10end,
        price: "20",
        paymentMethod: "cash",
      },
      {
        type: "regular",
        startDate: alt.minus10start2,
        endDate: alt.minus10end2,
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})
