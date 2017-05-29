import { Map, List, fromJS } from "immutable"
import { todayString, todayPlusAYearString } from "../../../utils/dateAndTime"

const initialState = Map({
  isLoading: false,
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
        title: "Confirmation",
        description: "Vérifiez et validez votre adhésion",
      },
    ],
  ),
  present: Map({}),
  all: List(),
  new: fromJS({
    start: todayString,
    end: todayPlusAYearString,
  }),
})

export default initialState
