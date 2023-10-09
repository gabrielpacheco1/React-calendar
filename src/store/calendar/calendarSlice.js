import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'

const tempEvent = [
    {
        _id: new Date().getTime(),
        title: 'Cumpleaños del jefe',
        notes: 'Comprar el pastel',
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: '#fafafa',
        user: {
            _id: '123ABC',
            name: 'Gabriel'
        }
    },
    {
        title: 'Reunion',
        notes: 'Conectar con Teams',
        start: addHours(new Date(), 2),
        end: addHours(new Date(), 4),
        bgColor: '#fafafa',
        user: {
            _id: '123ABC',
            name: 'Gabriel'
        }
    },
    
]

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: tempEvent,
    activeEvent: null
  },
  reducers: {
    events: (state) => {
      state.events += 1
    },
    onSetActiveEvent: (state, {payload}) => {
      state.activeEvent= payload
    },
  },
})

export const { onSetActiveEvent } = calendarSlice.actions