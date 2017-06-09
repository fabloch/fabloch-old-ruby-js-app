import moment from "moment"
import React from "react"
import BigCalendar from "react-big-calendar"

import "react-big-calendar/lib/css/react-big-calendar.css"
import events from "./events"

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = props => (
  <div>
    <BigCalendar
      style={{ minHeight: "600px" }}
      selectable
      events={events}
      defaultView="week"
      min={moment().hour(9).minute(0).second(0).toDate()}
      // scrollToTime={new Date(1970, 1, 1, 6)}
      // defaultDate={new Date(2015, 3, 12)}
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={(slotInfo) => alert(
        `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
        `\nend: ${slotInfo.end.toLocaleString()}`
      )}
    />
  </div>
)

export default MyCalendar
