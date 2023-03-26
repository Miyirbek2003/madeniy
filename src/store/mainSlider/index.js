import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSlider = createAsyncThunk('sliderSlice/getSlider', async (_, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.get('https://admin.qr-madeniymiyras.uz/api/v1/slide/4')
        dispatch(addSlide(response.data.items))

    } catch (error) {
        rejectWithValue(error)
    }
})

const initialState = {
    slides: [],
    locale: localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : localStorage.setItem('i18nextLng', 'uz'),
    lang: localStorage.getItem("i18nextLng") === 'en' ? 0 : localStorage.getItem("i18nextLng") === 'kr' ? 1 : localStorage.getItem("i18nextLng") === 'ru' ? 2 : localStorage.getItem("i18nextLng") === 'uz' && 3,
    isLoading: false
}

const sliderSlice = createSlice({
    name: 'sliderSlice',
    initialState,
    reducers: {
        addSlide: (state, { payload }) => {
            state.slides = payload
        },
        setLang: (state, { payload }) => {
            localStorage.setItem('i18nextLng', payload)
            state.locale = localStorage.getItem('i18nextLng')
            state.lang = localStorage.getItem("i18nextLng") === 'en' ? 0 : localStorage.getItem("i18nextLng") === 'kr' ? 1 : localStorage.getItem("i18nextLng") === 'ru' ? 2 : localStorage.getItem("i18nextLng") === 'uz' && 3
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSlider.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getSlider.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(getSlider.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default sliderSlice.reducer
export const { addSlide, setLang } = sliderSlice.actions