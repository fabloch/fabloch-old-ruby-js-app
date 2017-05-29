import moment from "moment"

moment.locale("fr")

export const today = moment.utc()
  .millisecond(0)
  .second(0)
  .minute(0)
  .hour(0)

export const todayString = moment(today)
                            .add(1, "y")
                            .subtract(1, "d")
                            .format("YYYY-MM-DD")

export const todayPlusAYearString = moment(today)
                                      .add(1, "y")
                                      .subtract(1, "d")
                                      .format("YYYY-MM-DD")

const fromApiToMoment = string =>
  moment.utc(string)

export const fromApiToString = string =>
  fromApiToMoment(string).format("YYYY-MM-DD")

export const localizedFromNow = string =>
  fromApiToMoment(string).from(today)

export const daysFromNow = string =>
  fromApiToMoment(string).diff(today, "days")

export const localizedToNow = string =>
  fromApiToMoment(string).to(today)

export const daysToNow = string =>
  today.diff(fromApiToMoment(string), "days")

export const addOneYear = string =>
  moment.utc(string).add(1, "y").subtract(1, "d").format("YYYY-MM-DD")

export const addOneYearAndBeInFuture = (string) => {
  const newDate = moment.utc(string).add(1, "y")
  if (newDate >= today) {
    return newDate.format("YYYY-MM-DD")
  }
  return today.format("YYYY-MM-DD")
}
