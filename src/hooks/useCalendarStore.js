import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store"
import calendarApi from "../api/calendarApi"
import { convertEventsToDateEvents } from "../helpers"

export const useCalendarStore = () => {

    const dispatch = useDispatch()

    const {events, activeEvent} = useSelector(state => state.calendar)
    const {user} = useSelector(state => state.auth)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) => {
        //TODO: actualizar
        //todo bien
        if(calendarEvent._id){
            //actualizando
            dispatch(onUpdateEvent({...calendarEvent}))
        }else {
            //creando
            const {data} = await calendarApi.post('/events', calendarEvent)
            console.log({data})
            dispatch(onAddNewEvent({...calendarEvent, id: data.evento.id, user}))
        }
    }

    const startDeletingEvent = () => {
        //Ir al backend
        dispatch(onDeleteEvent())
    }

    const startLoadingEvents = async() => {

        try {

            const {data} = await calendarApi.get('/events')
            const events= convertEventsToDateEvents(data.eventos)
            dispatch(onLoadEvents(events))
            // console.log(events)
            
        } catch (error) {
            console.log('Error cargando eventos')
            console.log(error)
        }

    }

    return {
        //Properties
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,
        //Methods
        setActiveEvent,
        startDeletingEvent,
        startLoadingEvents,
        startSavingEvent,
    }
}