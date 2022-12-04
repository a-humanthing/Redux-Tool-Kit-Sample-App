import React, { useState } from "react"
import "./App.css"
import { RouteState } from "./app/store"
import { useDispatch, useSelector } from "react-redux"
import ReservationCard from "./Components/ReservationCard"
import { addReservations } from "./features/reservationSlice"
import CustomerCard from "./Components/CustomerCard"

function App() {
  const [reservationName, setReservationname] = useState("")
  const reservations = useSelector(
    (state: RouteState) => state.reservations.value
  )
  const dispatch = useDispatch()
  const handleAddReservation = () => {
    if (!reservationName) return
    dispatch(addReservations(reservationName))
    setReservationname("")
  }

  const [activeCustomers, setActiveCustomers] = useState("")
  const customers = useSelector((state: RouteState) => state.customer.value)

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard index={index} name={name} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationName}
              onChange={(e) => setReservationname(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
