import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface reservationTypes {
  value: string[]
}
const initialState: reservationTypes = {
  value: ["arun", "sana"],
}

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    // contains method that updata initialState
    addReservations: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
    removeReservations: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1)
    },
  },
})

export const { addReservations, removeReservations } = reservationSlice.actions
export default reservationSlice.reducer
