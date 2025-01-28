import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:8080/field",
})

const FieldSlice = createSlice({
    name:'field',
    initialState:initialState,
    reducers:{

    }
})

export default FieldSlice.reducer;