/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don"t export plain objects
*/

import types from "./types"


const fetchSubscriptionsRequest = () => ({
  type: types.FETCH_SUBSCRIPTIONS_REQUEST,
})
const fetchSubscriptionsFailure = error => ({
  type: types.FETCH_SUBSCRIPTIONS_FAILURE,
  error,
})
const fetchSubscriptionsSuccess = data => ({
  type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
  data,
})
const selectPlan = plan => ({
  type: types.SELECT_PLAN,
  plan,
})
const selectPaymentMethod = paymentMethod => ({
  type: types.SELECT_PAYMENT_METHOD,
  paymentMethod,
})
const focusStep = step => ({
  type: types.FOCUS_STEP,
  step,
})

export default {
  fetchSubscriptionsRequest,
  fetchSubscriptionsFailure,
  fetchSubscriptionsSuccess,
  selectPlan,
  selectPaymentMethod,
  focusStep,
}
