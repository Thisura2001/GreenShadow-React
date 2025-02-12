import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Equipment from "../Model/Equipment.ts";

const initialState: Equipment[] = [];

const api = axios.create({
    baseURL: "http://localhost:8080/equipment",
});

export const saveEquipment = createAsyncThunk(
    'equipment/saveEquipment',
    async (equipment: Equipment) => {
        try {
            const response = await api.post('/add', equipment);
            return response.data;
        } catch (e) {
            console.log("Error adding equipment", e);
        }
    }
);

export const deleteEquipment = createAsyncThunk(
    'equipment/deleteEquipment',
    async (id: number) => {
        try {
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        } catch (e) {
            console.log("Error deleting equipment", e);
        }
    }
);

export const updateEquipment = createAsyncThunk(
    'equipment/updateEquipment',
    async (equipment: Equipment) => {
        try {
            const response = await api.put(`/update/${equipment.eqId}`, equipment);
            return response.data;
        } catch (e) {
            console.log("Error updating equipment", e);
        }
    }
);

export const getAllEquipment = createAsyncThunk(
    'equipment/getAllEquipment',
    async () => {
        const response = await api.get('/');
        return response.data;
    }
);

export const getOneEquipment = createAsyncThunk(
    'equipment/getOneEquipment',
    async (id: number) => {
        const response = await api.get(`/get/${id}`);
        return response.data;
    }
);

const EquipmentSlice = createSlice({
    name: 'equipment',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(saveEquipment.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(updateEquipment.fulfilled, (state, action) => {
            const index = state.findIndex((equipment: Equipment) => equipment.eqId === action.payload.eqId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        });
        builder.addCase(deleteEquipment.fulfilled, (state, action) => {
            return state.filter((equipment: Equipment) => equipment.eqId !== action.payload.eqId);
        });
        builder.addCase(getAllEquipment.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getOneEquipment.fulfilled, (state, action) => {
            const equipment = action.payload;
            const index = state.findIndex((e: Equipment) => e.eqId === equipment.equipmentId);
            if (index === -1) {
                state.push(equipment);
            } else {
                state[index] = equipment;
            }
        });
    }
});

export default EquipmentSlice.reducer;
