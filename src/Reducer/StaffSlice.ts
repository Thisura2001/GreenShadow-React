import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Staff from "../Model/Staff.ts";

const initialState:Staff[] = [];

const api = axios.create({
    baseURL: "http://localhost:8080/staff",
});

export const getAllStaff = createAsyncThunk(
    'staff/getAllStaff',
    async () => {
        const response = await api.get('/');
        return response.data;
    }
);

export const getOneStaff = createAsyncThunk(
    'staff/getOneStaff',
    async (id: number) => {
        const response = await api.get(`/get/${id}`);
        return response.data;
    }
);

export const saveStaff = createAsyncThunk(
    'staff/saveStaff',
    async (staff: Staff) => {
        const response = await api.post('/add', staff);
        return response.data;
    }
);

export const deleteStaff = createAsyncThunk(
    'staff/deleteStaff',
    async (id: number) => {
        const response = await api.delete(`/delete/${id}`);
        return response.data;
    }
);

export const updateStaff = createAsyncThunk(
    'staff/updateStaff',
    async (staff: Staff) => {
        const response = await api.put(`/update/${staff.id}`, staff);
        return response.data;
    }
);

const staffSlice = createSlice({
    name: 'staff',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveStaff.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(updateStaff.fulfilled, (state, action) => {
                const index = state.findIndex((staff: Staff) => staff.id === action.payload.id);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(deleteStaff.fulfilled, (state, action) => {
                return state.filter((staff: Staff) => staff.id !== action.payload.id);
            })
            .addCase(getAllStaff.fulfilled, (state, action) => {
                return [...action.payload];
            })
            .addCase(getOneStaff.fulfilled, (state, action) => {
                const staff = action.payload;
                const index = state.findIndex((s: Staff) => s.id === staff.id);
                if (index === -1) {
                    state.push(staff);
                } else {
                    state[index] = staff;
                }
            });
    }
});

export default staffSlice.reducer;
