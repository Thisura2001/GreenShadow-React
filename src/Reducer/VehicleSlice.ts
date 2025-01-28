import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:8080/vehicle",
})

const VehicleSlice = createSlice({
    name:'vehicle',
    initialState:initialState,
    reducers:{

    }
})

export default VehicleSlice.reducer;