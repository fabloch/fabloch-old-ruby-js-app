export const subOkHasReubscribed = [
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
]

export const subOkInMoreThan90 = [
  {
    type: "regular",
    startDate: "2009-05-01",
    endDate: "2010-04-30",
    price: "20",
    paymentMethod: "cash",
  },
]

export const subShouldRenew90 = [
  {
    type: "regular",
    startDate: "2009-03-30",
    endDate: "2010-03-29",
    price: "20",
    paymentMethod: "cash",
  },
]

export const subShouldRenew60 = [
  {
    type: "regular",
    startDate: "2009-02-28",
    endDate: "2010-02-27",
    price: "20",
    paymentMethod: "cash",
  },
]

export const subShouldRenew30 = [
  {
    type: "regular",
    startDate: "2009-01-30",
    endDate: "2010-01-29",
    price: "20",
    paymentMethod: "cash",
  },
]

export const subOut = [
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
]

export const subscriptionPlans = {
  plans: {
    normal: {
      title: "Particulier",
      subheader: "20€ / an",
      color: "teal",
      bulletpoints: [
        "accès à",
        "accès à",
        "...",
      ],
    },
    pro: {
      title: "Indépendant / Auto-entrepreneur",
      subheader: "40€ / an",
      color: "blue",
      bulletpoints: [
        "accès à",
        "accès à",
        "...",
      ],
    },
    company: {
      title: "Entreprise",
      subheader: "100€ / an",
      color: "violet",
      bulletpoints: [
        "accès à",
        "accès à",
        "...",
      ],
    },
  },
}
