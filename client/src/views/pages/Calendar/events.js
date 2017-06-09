import moment from "moment"

const tomorrow = moment().hour(0).minute(0).second(0).add(1, "d")
const dayAftTmrw = moment(tomorrow).add(1, "d")
const tenThirty = moment().hour(10).minute(30).second(0).toDate()
const twelve = moment().hour(12).minute(0).second(0).toDate()

console.log(tomorrow, dayAftTmrw)

export default [
  {
    title: "Conference",
    allDay: true,
    start: tomorrow,
    end: dayAftTmrw,
    desc: "Big conference for important people",
  },
  {
    title: "Meeting",
    start: tenThirty,
    end: twelve,
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  // {
  //   title: "Lunch",
  //   start: new Date(2015, 3, 12, 12, 0, 0, 0),
  //   end: new Date(2015, 3, 12, 13, 0, 0, 0),
  //   desc: "Power lunch",
  // },
  // {
  //   title: "Meeting",
  //   start: new Date(2015, 3, 12, 14, 0, 0, 0),
  //   end: new Date(2015, 3, 12, 15, 0, 0, 0),
  // },
  // {
  //   title: "Happy Hour",
  //   start: new Date(2015, 3, 12, 17, 0, 0, 0),
  //   end: new Date(2015, 3, 12, 17, 30, 0, 0),
  //   desc: "Most important meal of the day",
  // },
  // {
  //   title: "Dinner",
  //   start: new Date(2015, 3, 12, 20, 0, 0, 0),
  //   end: new Date(2015, 3, 12, 21, 0, 0, 0),
  // },
  // {
  //   title: "Birthday Party",
  //   start: new Date(2015, 3, 13, 7, 0, 0),
  //   end: new Date(2015, 3, 13, 10, 30, 0),
  // }
]
