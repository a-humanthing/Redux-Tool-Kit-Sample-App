import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addCustomers } from "../features/customerSlice"
import { removeReservations } from "../features/reservationSlice"
import { v4 as uuid } from "uuid"
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
          dispatch(
            addCustomers({
              id: uuid(),
              name,
              food: [],
            })
          )
        }}
        className="reservation-card-container"
      >
        {name}
      </div>
    </div>
  )
}

export default ReservationCard
