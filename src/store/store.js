import { configureStore } from '@reduxjs/toolkit'
import mainSlider from './mainSlider'
import newSlice from './newsSlice/newSlice'
import muzeySlice from './muzeySlice/muzeySlice'
import mapSlice from './mapSlice/mapSlice'
export const store = configureStore({
    reducer: {
        mainSlider,
        newSlice,
        muzeySlice,
        mapSlice
    }
})



