import { useCalendarStore, useUiStore} from "../../hooks"

export const FabDelete = () => {

  const {hasEventSelected, startDeletingEvent} = useCalendarStore()
  const {isDateModalOpen}= useUiStore()
  

  const handleClickDelete = () => {
    startDeletingEvent()
  }

  return (
    <button
        className="btn btn-danger fab-danger"
        onClick={handleClickDelete}
        style={{
          display: hasEventSelected && !isDateModalOpen ? '' : 'none'
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
