import { Map, fromJS } from "immutable"

const initialState = Map({
  isFetching: false,
  subscriptions: Map({}),
  plans: fromJS(
    {
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
  ),
  steps: fromJS(
    [
      {
        active: true,
        icon: "map signs",
        title: "Formule",
        description: "Choisissez votre formule",
      },
      {
        disabled: true,
        icon: "credit card",
        title: "Paiement",
        description: "Choisissez le mode de paiement",
      },
      {
        disabled: true,
        icon: "unordered list",
        title: "Validation",
        description: "Confirmez les information et validez",
      },
    ],
  ),
})

export default initialState
