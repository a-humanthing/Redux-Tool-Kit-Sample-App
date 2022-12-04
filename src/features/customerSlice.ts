import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface customerType {
  value: Customer[]
}
interface Customer {
  id: string
  name: string
  food: string[]
}
interface foodType {
  id: string
  food: string
}

const initialState: customerType = {
  value: [],
}
export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomers: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
    addFood: (state, action: PayloadAction<foodType>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food)
        }
      })
    },
  },
})

export const { addCustomers, addFood } = customerSlice.actions
export default customerSlice.reducer
