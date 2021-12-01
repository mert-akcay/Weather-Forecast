import { configureStore } from '@reduxjs/toolkit'
import weatherData from './weatherDataSlice'

export const store = configureStore({
    reducer:{
        'weatherData': weatherData
    }
})

