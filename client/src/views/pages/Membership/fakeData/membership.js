const membership = {
  isLoading: false,
  presentMembership: {
    type: "pro", // "pro", "entreprise"
    startDate: "1er août 2016",
    endDate: "31 juillet 2017",
    price: "20€",
    paymentMethod: "chèque",
  },
  shouldResubscribe: {
    string: "10 jours",
    info: true,
    warning: false,
    error: false,
    newEndDate: "13 octobre 2019",
  },
  pastMemberships: {
    show: false,
    memberSince: "31 avril 2016",
  },
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

export default membership
