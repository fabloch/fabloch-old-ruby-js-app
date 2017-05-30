import moment from "moment"
import { today, todayString, todayPlusAYearString } from "../../utils/dateAndTime"

export const plus100end = moment.utc(today).add(100, "d").format("YYYY-MM-DD")
export const plus100start = moment.utc(plus100end).subtract(1, "y").add(1, "d").format("YYYY-MM-DD")
export const plus100newEnd = moment.utc(plus100end).add(1, "y").format("YYYY-MM-DD")
export const plus100newStart = moment.utc(plus100start).add(1, "y").format("YYYY-MM-DD")
export const plus100end2 = moment.utc(plus100start).subtract(1, "d").format("YYYY-MM-DD")
export const plus100start2 = moment.utc(plus100end2).subtract(1, "y").add(1, "d").format("YYYY-MM-DD")

export const plus70end = moment.utc(today).add(70, "d").format("YYYY-MM-DD")
export const plus70start = moment.utc(plus70end).subtract(1, "y").add(1, "d").format("YYYY-MM-DD")
export const plus70newEnd = moment.utc(plus70end).add(1, "y").format("YYYY-MM-DD")
export const plus70newStart = moment.utc(plus70start).add(1, "y").format("YYYY-MM-DD")

export const plus50end = moment.utc(today).add(50, "d").format("YYYY-MM-DD")
export const plus50start = moment.utc(plus50end).subtract(1, "y").add(1, "d").format("YYYY-MM-DD")
export const plus50newEnd = moment.utc(plus50end).add(1, "y").format("YYYY-MM-DD")
export const plus50newStart = moment.utc(plus50start).add(1, "y").format("YYYY-MM-DD")

export const plus10end = moment.utc(today).add(9, "d").format("YYYY-MM-DD")
export const plus10start = moment.utc(plus10end).subtract(1, "y").add(1, "d").format("YYYY-MM-DD")
export const plus10newEnd = moment.utc(plus10end).add(1, "y").format("YYYY-MM-DD")
export const plus10newStart = moment.utc(plus10start).add(1, "y").format("YYYY-MM-DD")

export const minus10end = moment.utc(today).subtract(10, "d").format("YYYY-MM-DD")
export const minus10start = moment.utc(minus10end).subtract(1, "y").add(1, "d").format("YYYY-MM-DD")
export const minus10newEnd = moment.utc(today).add(1, "y").subtract(1, "d").format("YYYY-MM-DD")
export const minus10newStart = today.format("YYYY-MM-DD")
export const minus10end2 = moment.utc(minus10start).subtract(1, "d").format("YYYY-MM-DD")
export const minus10start2 = moment.utc(minus10end2).subtract(1, "y").add(1, "d").format("YYYY-MM-DD")

// console.log("plus100end", plus100end) // "2017-08-31"
// console.log("plus100start", plus100start) // "2016-09-01"
// console.log("plus100end2", plus100end2) // "2016-08-31"
// console.log("plus100start2", plus100start2) // "2015-09-01"
// console.log("plus70end", plus70end) // "2017-08-01"
// console.log("plus70start", plus70start) // "2016-08-02"
// console.log("plus50end", plus50end) // "2017-07-12"
// console.log("plus50start", plus50start) // "2016-07-13"
// console.log("plus10end", plus10end) // "2017-06-02"
// console.log("plus10start", plus10start) // "2016-06-03"
// console.log("minus10end", minus10end) // "2017-05-13"
// console.log("minus10start", minus10start) // "2016-05-14"
// console.log("minus10end2", minus10end2) // "2016-05-13"
// console.log("minus10start2", minus10start2) // "2015-05-14"

export const subOkHasResubscribed = [
  {
    plan: "regular",
    startDate: plus100start,
    endDate: plus100end,
    priceCents: 2000,
    paymentMethod: "checkOrCash",
    pending: false,
  },
  {
    plan: "regular",
    startDate: plus100start2,
    endDate: plus100end2,
    priceCents: 2000,
    paymentMethod: "checkOrCash",
    pending: false,
  },
]

export const subOkInMoreThan90 = [
  {
    plan: "regular",
    startDate: plus100start,
    endDate: plus100end,
    priceCents: 2000,
    paymentMethod: "checkOrCash",
    pending: false,
  },
]

export const subShouldRenew90 = [
  {
    plan: "regular",
    startDate: plus70start,
    endDate: plus70end,
    priceCents: 2000,
    paymentMethod: "checkOrCash",
    pending: false,
  },
]

export const subShouldRenew60 = [
  {
    plan: "regular",
    startDate: plus50start,
    endDate: plus50end,
    priceCents: 2000,
    paymentMethod: "checkOrCash",
    pending: false,
  },
]

export const subShouldRenew30 = [
  {
    plan: "regular",
    startDate: plus10start,
    endDate: plus10end,
    priceCents: 2000,
    paymentMethod: "checkOrCash",
    pending: false,
  },
]

export const subOut = [
  {
    plan: "regular",
    startDate: minus10start,
    endDate: minus10end,
    priceCents: 2000,
    paymentMethod: "checkOrCash",
    pending: false,
  },
  {
    plan: "regular",
    startDate: minus10start2,
    endDate: minus10end2,
    priceCents: 2000,
    paymentMethod: "checkOrCash",
    pending: false,
  },
]

export const chosenAlt = subOut

export const postData1 = {
  plan: "regular",
  startDate: todayString,
  endDate: todayPlusAYearString,
  priceCents: "2000",
  paymentMethod: "checkOrCash",
  pending: true,
}
