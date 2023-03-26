import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getMap = createAsyncThunk('mapSlice/getMap', async (_, {rejectWithValue, dispatch}) => {
    try {
        const response = await axios.get(`https://admin.qr-madeniymiyras.uz/api/v1/unesco/take/5`)
        dispatch(setMap(response.data.items))
    } catch (error) {
        rejectWithValue(error)
    }
})

const initialState = {
    maps: []
}

const mapSlice = createSlice({
    name: 'mapSlice',
    initialState,
    reducers: {
        setMap: (state, {payload}) => {
            state.maps = payload
        }
    }
})


export default mapSlice.reducer
export const { setMap } = mapSlice.actions