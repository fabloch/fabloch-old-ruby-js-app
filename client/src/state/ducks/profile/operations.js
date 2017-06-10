/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck
-- what can be dispatched from components
Simple operations are just about forwarding
an action creator, ex: simpleQuack
Complex operations involve returning
a thunk that dispatches multiple actions in a certain order
*/

import { SubmissionError } from "redux-form"
import { toastr } from "react-redux-toastr"

import api from "../../../api"
import actions from "./actions"
import toastrOptions from "../../../utils/toastrOptions"

const fetchProfile = () => (dispatch) => {
  dispatch(actions.fetchProfileRequest())
  return api.fetch("profile", "get")
  .then((response) => {
    dispatch(
      actions.fetchProfileSuccess(response.data),
    )
  })
  .catch((error) => {
    if (error.response) {
      dispatch(actions.fetchProfileFailure({
        status: error.response.status,
        statusText: error.response.statusText,
      }))
      dispatch(actions.toggleEdit())
    } else if (error.request) {
      return error.request
    }
    return (error.message)
  })
}

const dataToForm = (data) => {
  const formData = new FormData()
  Object.keys(data).forEach((key) => {
    if (key === "avatar") {
      formData.append(key, data[key][0])
    } else {
      formData.append(key, data[key])
    }
  })
  return formData
}

const postProfile = data => (dispatch) => {
  dispatch(actions.postProfileRequest())
  return api.fetch("profile", "post", dataToForm(data))
  .then((response) => {
    toastr.success(
      "Profil créé.",
      "Un profil tout neuf !",
      toastrOptions({
        icon: "address card",
      }),
    )
    dispatch(
      actions.postProfileSuccess(response.data),
    )
    dispatch(actions.toggleEdit())
  })
  .catch((error) => {
    if (error.response) {
      dispatch(actions.postProfileFailure())
      throw new SubmissionError(error.response.data)
    } else if (error.request) {
      // do something
      // TODO: bad request
    }
  })
}

const putProfile = data => (dispatch) => {
  dispatch(actions.putProfileRequest())
  return api.fetch("profile", "put", dataToForm(data))
  .then((response) => {
    toastr.info(
      "Profil mis à jour.",
      "Votre profil a bien été mis à jour.",
      toastrOptions({
        icon: "address card",
      }),
    )
    dispatch(
      actions.putProfileSuccess(response.data),
    )
    dispatch(actions.toggleEdit())
  })
  .catch((error) => {
    if (error.response) {
      dispatch(actions.putProfileFailure())
      throw new SubmissionError(error.response.data)
    } else if (error.request) {
      // do something
      // TODO: bad request
    }
  })
}

const toggleEdit = actions.toggleEdit

export default {
  fetchProfile,
  toggleEdit,
  postProfile,
  putProfile,
}
