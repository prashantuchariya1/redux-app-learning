import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import  themeColorReducer  from '../features/theme/themeSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeColor: themeColorReducer
  },
})