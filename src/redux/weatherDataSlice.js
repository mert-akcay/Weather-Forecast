import { createSlice } from '@reduxjs/toolkit'

const weatherDataSlice = createSlice({
    name:'weatherData',
    initialState:{
        weatherData : [],
        currentSelected : "İstanbul",
        forecastData : [],
    },
    reducers:{
        setCurrentSelected : (state,action) => {
            state.currentSelected = action.payload
        },
        setWeatherData : (state, action) => {
            state.weatherData = action.payload
        },
        setForecastData : (state, action) => {
            state.forecastData = action.payload
        },
    }
})


export const {setCurrentSelected, setWeatherData, setForecastData} = weatherDataSlice.actions;
export default weatherDataSlice.reducer