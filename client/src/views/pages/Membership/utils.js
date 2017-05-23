export const planType = (type) => {
  switch (type) {
  case ("regular"):
    return "Particulier"
  case ("pro"):
    return "Travailleur indépendant"
  case ("company"):
    return "Entreprise"
  default:
    return ""
  }
}

export const paidWith = (paymentMethod) => {
  switch (paymentMethod) {
  case ("cash"):
    return "en espèces"
  case ("card"):
    return "par carte de crédit"
  case ("check"):
    return "par chèque"
  default:
    return ""
  }
}
