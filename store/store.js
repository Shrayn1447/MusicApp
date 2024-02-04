'use client'
import { configureStore } from '@reduxjs/toolkit'
import counterReduser from '../store/features/counter/counterSlice'
export const store = () => {
  return configureStore({
    reducer: {
      track: counterReduser
    },
  })
}