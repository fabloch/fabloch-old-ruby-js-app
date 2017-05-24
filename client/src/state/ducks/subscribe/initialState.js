import { Map, fromJS } from "immutable"

const initialState = Map({
  isFetching: false,
  plans: fromJS(
    {
      regular: {
        planName: "regular",
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
        planName: "pro",
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
        planName: "company",
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
  ),
  steps: fromJS(
    [
      {
        // active: false,
        // icon: "map signs",
        // title: "Formule",
        // description: "Entreprises (100€)",
        // plan: "company",
        // planLocalized: "entreprises",
        // completed: true,
        /* Regular initial state */
        active: true,
        icon: "map signs",
        title: "Formule",
        description: "Choisissez votre formule",
      },
      {
        // icon: "credit card",
        // title: "Paiement",
        // description: "Carte bancaire",
        // paymentMethod: "card",
        // paymentMethodLocalized: "Carte bancaire",
        // completed: true,
        /* Regular initial state */
        disabled: true,
        icon: "credit card",
        title: "Paiement",
        description: "Choisissez le mode de paiement",
      },
      {
        // icon: "unordered list",
        // title: "Confirmation",
        // description: "Confirmez les information et validez",
        /* Regular initial state */
        disabled: true,
        icon: "unordered list",
        title: "Confirmation",
        description: "Confirmez les information et validez",
      },
    ],
  ),
})

export default initialState
