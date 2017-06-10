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
import fakeApi from "../../../api/fake"
import actions from "./actions"
import toastrOptions from "../../../utils/toastrOptions"

const fetchSubscriptions = () => (dispatch) => {
  dispatch(actions.fetchSubscriptionsRequest())
  return api.fetch("subscriptions", "get")
  .then((response) => {
    dispatch(
      actions.fetchSubscriptionsSuccess(response.data),
    )
  })
  .catch((error) => {
    if (error.response) {
      dispatch(actions.fetchSubscriptionsFailure({
        status: error.response.status,
        statusText: error.response.statusText,
      }))
    } else if (error.request) {
      return error.request
    }
    return (error.message)
  })
}

const fetchFakeSubscriptions = () => (dispatch) => {
  dispatch(actions.fetchSubscriptionsRequest())
  return fakeApi.fetch("subscriptions", "get")
  .then((response) => {
    dispatch(
      actions.fetchSubscriptionsSuccess(response.data),
    )
  })
  .catch((error) => {
    if (error.response) {
      dispatch(actions.fetchSubscriptionsFailure({
        status: error.response.status,
        statusText: error.response.statusText,
      }))
    } else if (error.request) {
      return error.request
    }
    return (error.message)
  })
}

const postSubscription = data => (dispatch) => {
  dispatch(actions.postSubscriptionRequest())
  return api.fetch("subscriptions", "post", data)
  .then((response) => {
    dispatch(
      actions.postSubscriptionSuccess(response.data),
    )
    toastr.success(
      "Votre abonnement est confirmé.",
      "Un email récapitulatif vous a été envoyé.",
      toastrOptions({
        icon: "certificate",
      }),
    )
  })
  .catch((error) => {
    if (error.response) {
      dispatch(actions.postSubscriptionFailure())
      throw new SubmissionError(error.response.data)
    } else if (error.request) {
      // do something
      // TODO: bad request
    }
  })
}

const selectPlan = actions.selectPlan
const selectPaymentMethod = actions.selectPaymentMethod
const focusStep = actions.focusStep

export default {
  fetchSubscriptions,
  fetchFakeSubscriptions,
  selectPlan,
  selectPaymentMethod,
  focusStep,
  postSubscription,
}
