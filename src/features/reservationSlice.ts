import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface reservationTypes {
  value: string[]
}
const initialState: reservationTypes = {
  value: [],
}

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    // contains method that updata initialState
    addReservations: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
  },
})

export default reservationSlice.reducer
