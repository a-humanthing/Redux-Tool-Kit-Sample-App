import { configureStore } from "@reduxjs/toolkit"
import reservationReducer from "../features/reservationSlice"

export const store = configureStore({
  reducer: {
    //add slices
    reservations: reservationReducer,
  },
})

export type RouteState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
