
export const CalendarEvent = ({event}) => {
    
  const {title, user}= event

  // console.log(title, user)
  return (
    <>
      <strong>{title} - </strong>
      {/* <strong>{user}</strong> */}
      <span>{user.name}</span>
    </>
  )
}
