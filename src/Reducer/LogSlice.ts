import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Log from "../Model/Log.ts";

const initialState:Log[] = [];

const api = axios.create({
    baseURL: "http://localhost:8080/log",
})

export const saveLog = createAsyncThunk(
    'log/saveLog',
    async (log:Log)=>{
        try {
            const response = await api.post('/add/',log)
            return response.data;
        }catch (e){
            console.log(e)
        }
    }
)
export const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
export const deleteLog = createAsyncThunk(
    'log/deleteLog',
    async (logId:number)=>{
        try {
            const response = await api.delete(`/delete/${logId}`)
            return response.data;
        }catch (e){
            console.log(e)
        }
    }
)

const LogSlice = createSlice({
    name:'log',
    initialState:initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(saveLog.fulfilled,(state,action)=>{
            state.push(action.payload)
        })
        builder.addCase(deleteLog.fulfilled,(state,action)=>{
            state.filter((log:Log)=>log.logId !== action.payload.logId)
        })
    }
})

export default LogSlice.reducer;