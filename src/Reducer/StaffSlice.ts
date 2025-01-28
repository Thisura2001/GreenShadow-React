import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:8080/staff",
})

const StaffSlice = createSlice({
    name:'staff',
    initialState:initialState,
    reducers:{

    }
})

export default StaffSlice.reducer;