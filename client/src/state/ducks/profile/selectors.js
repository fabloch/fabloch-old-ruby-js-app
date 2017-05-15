const getProfileData = state =>
  state
    .get("data")
    .toJS()

export default {
  getProfileData,
}
