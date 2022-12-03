import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeReservations } from "../features/reservationSlice"
interface ReservationCardTypes {
  name: string
  index: number
}
const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch()
  return (
    <div>
      <div
        onClick={() => {
          dispatch(removeReservations(index))
        }}
        className="reservation-card-container"
      >
        {name}
      </div>
    </div>
  )
}

export default ReservationCard
