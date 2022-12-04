import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RouteState } from "../app/store"
import { addFood } from "../features/customerSlice"

interface CustomerCardType {
  id: string
  name: string
  food: string[]
}
const CustomerCard = ({ id, name, food }: CustomerCardType) => {
  const [fooditem, setFooditem] = useState("")
  const fooditems = useSelector((state: RouteState) => {
    state.customer.value.filter((customer) => {})
  })

  const dispatch = useDispatch()
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={fooditem}
            onChange={(e) => setFooditem(e.target.value)}
          />
          <button
            onClick={() => {
              if (!fooditem) return
              dispatch(
                addFood({
                  id,
                  food: fooditem,
                })
              )
              setFooditem("")
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard
