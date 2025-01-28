import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:8080/log",
})

const LogSlice = createSlice({
    name:'log',
    initialState:initialState,
    reducers:{

    }
})

export default LogSlice.reducer;