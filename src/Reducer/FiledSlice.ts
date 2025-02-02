import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Field from "../Model/Field.ts";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:8080/field",
})
export const saveField =createAsyncThunk(
    'field/saveField',
    async (field:FormData)=>{
        try {
            const response =await api.post('/add',field)
            return response.data;
        }catch (e){
            console.log("Error adding field ",e)
        }
    }
)
export const deleteField = createAsyncThunk(
    'field/deleteField',
    async (id:number)=>{
        try {
            const response = await api.delete(`/delete/${id}`)
            return response.data;
        }catch (e){
            console.log("Error deleting field ",e)
        }
    }
)
export const updateField = createAsyncThunk(
    'field/updateField',
    async (field:Field)=>{
        try {
            const response =await api.put(`/update/${field.fieldId}`,field)
            return response.data;
        }catch (e){
            console.log("Error updating field ",e)
        }
    }
)
export const getAllFields = createAsyncThunk(
    'field/getAllFields',
    async ()=>{
        const response = await api.get('/');
        return response.data;
    }
)
export const getOneField = createAsyncThunk(
    'field/getOneField',
    async (id:number)=>{
        const response = await api.get(`/get/${id}`)
        return response.data;
    }
)
const FieldSlice = createSlice({
    name:'field',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(saveField.fulfilled,(state,action)=>{
            state.push(action.payload)
        })
        builder.addCase(updateField.fulfilled,(state,action)=>{
            const index = state.findIndex((field:Field)=> field.fieldId === action.payload.fieldId);
            if (index !== -1){
                state[index] = action.payload
            }
        })
        builder.addCase(deleteField.fulfilled,(state,action)=>{
            state.filter((field:Field)=>field.fieldId !== action.payload.fieldId)
        })
        builder.addCase(getAllFields.fulfilled,(state,action)=>{
            action.payload.map((field:Field)=>{
                state.push(field)
            })
        })
        builder.addCase(getOneField.fulfilled,(state,action)=>{
            const field = action.payload;
            const index = state.findIndex((f: Field) => f.fieldId === field.fieldId);
            if (index === -1) {
                state.push(field);
            } else {
                state[index] = field;
            }
        })
    }
})

export default FieldSlice.reducer;