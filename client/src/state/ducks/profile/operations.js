/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck
-- what can be dispatched from components
Simple operations are just about forwarding
an action creator, ex: simpleQuack
Complex operations involve returning
a thunk that dispatches multiple actions in a certain order
*/

import axios from "axios"

import actions from "./actions"

const getProfile = () => (dispatch) => {
  dispatch(actions.getProfileRequest())
  return axios({
    url: "/profile",
    method: "get",
    responseType: "json",
  })
  .then((response) => {
    dispatch(actions.getProfileSuccess(response.data))
  })
  .catch((err) => {
    if (err.response) {
      dispatch(actions.getProfileFailure({
        status: err.response.status,
        statusText: err.response.statusText,
      }))
    } else if (err.request) {
      // do something
      // TODO: bad request
    }
  })
}

export default {
  getProfile,
}
