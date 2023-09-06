import { Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { NavBar } from '../'

import { getMessagesES, localizer } from '../../helpers'

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa'
}]

export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected, user) => {
    console.log({event, start, end, isSelected, user})

    const style = {
      backgroundColor: '#347CF7',
      // backgroundColor: '#917A47',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }
  return (
    <>
      <NavBar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  )
}
