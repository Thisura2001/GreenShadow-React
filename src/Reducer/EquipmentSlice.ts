import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:8080/equipment",
})

const EquipmentSlice = createSlice({
    name:'equipment',
    initialState:initialState,
    reducers:{

    }
})

export default EquipmentSlice.reducer;