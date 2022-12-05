import { configureStore } from "@reduxjs/toolkit"
import reservationReducer from "../features/reservationSlice"
import customerReducer from "../features/customerSlice"
import userReducer from "../features/userSlice"
export const store = configureStore({
  reducer: {
    //add slices
    reservations: reservationReducer,
    customer: customerReducer,
    user: userReducer,
  },
})

export type RouteState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
