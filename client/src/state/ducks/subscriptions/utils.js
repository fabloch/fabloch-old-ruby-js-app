import find from "lodash/find"
import first from "lodash/first"
import last from "lodash/last"
import moment from "moment"

moment.locale("fr")

// moment.updateLocale("fr", {
//   relativeTime : Object
// });


const memberUntil = data =>
  moment.utc(first(data).endDate).format("YYYY-MM-DD")

const memberUntilFromNow = (data, today = moment.utc()) =>
  moment.utc(first(data).endDate).from(today)

const memberUntilFromNowInDays = (data, today = moment.utc()) =>
  moment.utc(first(data).endDate).diff(today, "days")

const memberSince = data =>
  moment.utc(last(data).startDate).format("YYYY-MM-DD")

const memberSinceFromNow = (data, today = moment.utc()) =>
  moment.utc(last(data).startDate).from(today)

const memberSinceFromNowInDays = (data, today = moment.utc()) =>
  moment.utc(last(data).startDate).diff(today, "days")

export default {
  memberUntil,
  memberUntilFromNow,
  memberUntilFromNowInDays,
  memberSince,
  memberSinceFromNow,
  memberSinceFromNowInDays,
}
