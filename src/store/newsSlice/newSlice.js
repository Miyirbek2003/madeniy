import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getLastNews = createAsyncThunk('newSlice/getLastNews', async (_, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.get('https://admin.qr-madeniymiyras.uz/api/v1/news/take/10')
        dispatch(setLastNews(response.data.items))
    } catch (error) {
        rejectWithValue(error)
    }
})


export const getAboutLastNew = createAsyncThunk('newSlice/getAboutLastNew', async (slug, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.get(`https://admin.qr-madeniymiyras.uz/api/v1/news/show/${slug}`)
        dispatch(setAboutLastNew(response.data.item))
    } catch (error) {
        rejectWithValue(error)
    }
})


export const getGalery = createAsyncThunk('newSlice/getGalery', async (_, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.get('https://admin.qr-madeniymiyras.uz/api/v1/photo/take/5')
        dispatch(setGalery(response.data.items))
    } catch (error) {
        rejectWithValue(error)
    }
})


const initialState = {
    lastNews: [],
    aboutLastNew: [],
    mainLoading: false,

    galery: []
}
export const newSlice = createSlice({
    name: 'newSlice',
    initialState,
    reducers: {
        setLastNews: (state, { payload }) => {
            state.lastNews = payload
        },
        setNewId: (state, { payload }) => {
            state.newId = payload
        },
        setGalery: (state, { payload }) => {
            state.galery = payload
        },
        setAboutLastNew: (state, { payload }) => {
            state.aboutLastNew = payload
        },
    },

},
)

export default newSlice.reducer
export const { setGalery, setLastNews, setAboutLastNew } = newSlice.actions