import { Map, fromJS } from "immutable"

export const stateOkHasReubscribed = Map({
  subscriptions: fromJS({
    isFetching: false,
    fetchErrors: false,
    memberUntil: "2011-01-31",
    memberUntilFromNow: "dans 4 mois",
    memberUntilFromNowInDays: 119,
    memberSince: "2010-01-31",
    memberSinceFromNow: "il y a 8 mois",
    memberSinceFromNowInDays: -245,
    shouldResubscribe: null,
    allMemberships: [
      {
        type: "regular",
        startDate: "2010-02-01",
        endDate: "2011-01-31",
        price: "20",
        paymentMethod: "cash",
      },
      {
        type: "regular",
        startDate: "2009-02-01",
        endDate: "2010-01-31",
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})

export const stateOkInMoreThan90 = Map({
  subscriptions: fromJS({
    isFetching: false,
    fetchErrors: false,
    memberUntil: "2010-04-30",
    memberUntilFromNow: "dans 4 mois",
    memberUntilFromNowInDays: 119,
    memberSince: "2009-05-01",
    memberSinceFromNow: "il y a 8 mois",
    memberSinceFromNowInDays: -245,
    shouldResubscribe: null,
    allMemberships: [
      {
        type: "regular",
        startDate: "2009-05-01",
        endDate: "2010-04-30",
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})

export const stateShouldRenew90 = Map({
  subscriptions: fromJS({
    isFetching: false,
    fetchErrors: false,
    memberUntil: "2010-03-29",
    memberUntilFromNow: "dans 3 mois",
    memberUntilFromNowInDays: 87,
    memberSince: "2009-03-30",
    memberSinceFromNow: "il y a 9 mois",
    memberSinceFromNowInDays: -277,
    shouldResubscribe: "info",
    allMemberships: [
      {
        type: "regular",
        startDate: "2009-03-30",
        endDate: "2010-03-29",
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})

export const stateShouldRenew60 = Map({
  subscriptions: fromJS({
    isFetching: false,
    fetchErrors: false,
    memberUntil: "2010-02-27",
    memberUntilFromNow: "dans 2 mois",
    memberUntilFromNowInDays: 57,
    memberSince: "2009-02-28",
    memberSinceFromNow: "il y a 10 mois",
    memberSinceFromNowInDays: -307,
    shouldResubscribe: "warning",
    allMemberships: [
      {
        type: "regular",
        startDate: "2009-02-28",
        endDate: "2010-02-27",
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})

export const stateShouldRenew30 = Map({
  subscriptions: fromJS({
    isFetching: false,
    fetchErrors: false,
    memberUntil: "2010-01-29",
    memberUntilFromNow: "dans un mois",
    memberUntilFromNowInDays: 28,
    memberSince: "2009-01-30",
    memberSinceFromNow: "il y a un an",
    memberSinceFromNowInDays: -336,
    shouldResubscribe: "error",
    allMemberships: [
      {
        type: "regular",
        startDate: "2009-01-30",
        endDate: "2010-01-29",
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})

export const stateOut = Map({
  subscriptions: fromJS({
    isFetching: false,
    fetchErrors: false,
    memberUntil: "2009-01-31",
    memberUntilFromNow: "il y a un an",
    memberUntilFromNowInDays: -335,
    memberSince: "2007-02-01",
    memberSinceFromNow: "il y a 3 ans",
    memberSinceFromNowInDays: -1065,
    shouldResubscribe: "error",
    allMemberships: [
      {
        type: "regular",
        startDate: "2008-02-01",
        endDate: "2009-01-31",
        price: "20",
        paymentMethod: "cash",
      },
      {
        type: "regular",
        startDate: "2007-02-01",
        endDate: "2008-01-31",
        price: "20",
        paymentMethod: "cash",
      },
    ],
  }),
})
