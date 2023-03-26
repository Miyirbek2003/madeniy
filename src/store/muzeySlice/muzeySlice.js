import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getMuzey = createAsyncThunk('muzeySlice/getMuzey', async (_, { rejectWithValue, dispatch }) => {
    try {
        const response = await axios.get('https://admin.qr-madeniymiyras.uz/api/v1/museum/take/5')
        dispatch(setMuzey(response.data.items))
    } catch (error) {
        rejectWithValue(error)
    }
})


export const getAboutMuzey = createAsyncThunk('muzeySlice/getAboutMuzey', async (slug, { rejectWithValue, dispatch }) => {
    try {
        const response = await axios.get(`https://admin.qr-madeniymiyras.uz/api/v1/museum/show/${slug}`)
        dispatch(setAboutMuzey(response.data.item))
    } catch (error) {
        rejectWithValue(error)
    }
})


const initialState = {
    muzey: [],
    aboutMuzey: []
}

const muzeySlice = createSlice({
    name: 'muzeySlice',
    initialState,
    reducers: {
        setMuzey: (state, { payload }) => {
            state.muzey = payload
        },
        setAboutMuzey: (state, { payload }) => {
            state.aboutMuzey = payload
        }
    }
})
export default muzeySlice.reducer

export const { setMuzey, setAboutMuzey } = muzeySlice.actions
