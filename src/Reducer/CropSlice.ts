import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Crop from "../Model/Crop.ts";

const initialState: Crop[] = [];

const api = axios.create({
    baseURL: "http://localhost:8080/crop",
});

export const saveCrop = createAsyncThunk(
    'crop/saveCrop',
    async (crop: Crop) => {
        try {
            const response = await api.post('/add', crop);
            return response.data;
        } catch (e) {
            console.log("Error adding crop ", e);
        }
    }
);

export const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

export const deleteCrop = createAsyncThunk(
    'crop/deleteCrop',
    async (id: number) => {
        try {
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        } catch (e) {
            console.log("Error deleting crop ", e);
        }
    }
);

export const updateCrop = createAsyncThunk(
    'crop/updateCrop',
    async (crop: Crop) => {
        try {
            const response = await api.put(`/update/${crop.cropId}`, crop);
            return response.data;
        } catch (e) {
            console.log("Error updating crop ", e);
        }
    }
);

export const getAllCrops = createAsyncThunk(
    'crop/getAllCrops',
    async () => {
        const response = await api.get('/');
        return response.data;
    }
);

export const getOneCrop = createAsyncThunk(
    'crop/getOneCrop',
    async (id: number) => {
        const response = await api.get(`/get/${id}`);
        return response.data;
    }
);

const CropSlice = createSlice({
    name: 'crop',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(saveCrop.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(updateCrop.fulfilled, (state, action) => {
            const index = state.findIndex((crop: Crop) => crop.cropId === action.payload.cropId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        });
        builder.addCase(deleteCrop.fulfilled, (state, action) => {
            return state.filter((crop: Crop) => crop.cropId !== action.payload.cropId);
        });
        builder.addCase(getAllCrops.fulfilled, (_, action) => {
            return action.payload;
        });
        builder.addCase(getOneCrop.fulfilled, (state, action) => {
            const crop = action.payload;
            const index = state.findIndex((c: Crop) => c.cropId === crop.cropId);
            if (index === -1) {
                state.push(crop);
            } else {
                state[index] = crop;
            }
        });
    }
});

export default CropSlice.reducer;