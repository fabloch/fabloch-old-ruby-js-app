import first from "lodash/first"
import last from "lodash/last"
import moment from "moment"
import {
  fromApiToString,
  localizedFromNow,
  daysFromNow,
  addOneYear,
  addOneYearAndBeInFuture,
} from "../../../utils/dateAndTime"

const plan = data => first(data).plan

const memberUntil = data =>
  fromApiToString(first(data).endDate)

const memberUntilFromNow = data =>
  localizedFromNow(first(data).endDate)

const memberUntilFromNowInDays = data =>
  daysFromNow(first(data).endDate)

const memberSince = data =>
  fromApiToString(last(data).startDate)

const memberSinceFromNow = data =>
  localizedFromNow(last(data).startDate)

const memberSinceFromNowInDays = data =>
  daysFromNow(last(data).startDate)

const shouldResubscribe = (data) => {
  if (memberUntilFromNowInDays(data) > 90) {
    return null
  } else if (memberUntilFromNowInDays(data) > 60
      && memberUntilFromNowInDays(data) <= 90) {
    return "info"
  } else if (memberUntilFromNowInDays(data) > 30
      && memberUntilFromNowInDays(data) <= 60) {
    return "warning"
  }
  return "error"
}

const newSubscriptionStart = data =>
  addOneYearAndBeInFuture(moment.utc(first(data).startDate))

const newSubscriptionEnd = data =>
  addOneYear(newSubscriptionStart(data))

export default {
  plan,
  memberUntil,
  memberUntilFromNow,
  memberUntilFromNowInDays,
  memberSince,
  memberSinceFromNow,
  memberSinceFromNowInDays,
  shouldResubscribe,
  newSubscriptionStart,
  newSubscriptionEnd,
}
