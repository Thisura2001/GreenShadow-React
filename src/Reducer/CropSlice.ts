import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:8080/crop",
})

const CropSlice = createSlice({
    name:'crop',
    initialState:initialState,
    reducers:{

    }
})

export default CropSlice.reducer;