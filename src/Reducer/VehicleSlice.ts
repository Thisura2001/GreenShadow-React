import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Vehicle from "../Model/Vehicle.ts";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:8080/vehicle",
});

export const saveVehicle = createAsyncThunk(
    'vehicle/saveVehicle',
    async (vehicle: Vehicle) => {
        try {
            const response = await api.post('/add', vehicle);
            return response.data;
        } catch (e) {
            console.log("Error adding vehicle", e);
        }
    }
);

export const deleteVehicle = createAsyncThunk(
    'vehicle/deleteVehicle',
    async (id: number) => {
        try {
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        } catch (e) {
            console.log("Error deleting vehicle", e);
        }
    }
);

export const updateVehicle = createAsyncThunk(
    'vehicle/updateVehicle',
    async (vehicle: Vehicle) => {
        try {
            const response = await api.put(`/update/${vehicle.vehicle_code}`, vehicle);
            return response.data;
        } catch (e) {
            console.log("Error updating vehicle", e);
        }
    }
);

export const getAllVehicles = createAsyncThunk(
    'vehicle/getAllVehicles',
    async () => {
        const response = await api.get('/');
        return response.data;
    }
);

export const getOneVehicle = createAsyncThunk(
    'vehicle/getOneVehicle',
    async (id: number) => {
        const response = await api.get(`/get/${id}`);
        return response.data;
    }
);

const VehicleSlice = createSlice({
    name: 'vehicle',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(saveVehicle.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(updateVehicle.fulfilled, (state, action) => {
            const index = state.findIndex((vehicle: Vehicle) => vehicle.vehicle_code === action.payload.vehicleCode);
            if (index !== -1) {
                state[index] = action.payload;
            }
        });
        builder.addCase(deleteVehicle.fulfilled, (state, action) => {
            return state.filter((vehicle: Vehicle) => vehicle.vehicle_code !== action.payload.vehicleCode);
        });
        builder.addCase(getAllVehicles.fulfilled, (state, action) => {
            return [...action.payload];
        });
        builder.addCase(getOneVehicle.fulfilled, (state, action) => {
            const vehicle = action.payload;
            const index = state.findIndex((v: Vehicle) => v.vehicle_code === vehicle.vehicleCode);
            if (index === -1) {
                state.push(vehicle);
            } else {
                state[index] = vehicle;
            }
        });
    }
});

export default VehicleSlice.reducer;
