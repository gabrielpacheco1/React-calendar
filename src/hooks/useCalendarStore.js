import { useDispatch, useSelector } from "react-redux"
import {  } from "../store"

export const useCalendarStore = () => {

    const dispatch = useDispatch()

    const {events} = useSelector(state => state.calendar)

    return {
        //Properties
        events,
        //Methods

    }
}