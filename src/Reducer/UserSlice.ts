import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {User} from "../Model/User.ts";

const api =axios.create({
    baseURL: 'http://localhost:8080',
})
const initialState = {
    jwt_token: null,
    refresh_token : null,
    username: null,
    isAuthenticated: false,
    loading: false,
    error: '',
};

export const registerUser =createAsyncThunk(
    'user/register',
    async (user:User)=>{
        try {
            const response = await api.post('/auth/register',{user},{withCredentials:true});
            return response.data;
        }catch (e){
            console.log(e)
        }
    }
)
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(registerUser.pending,(state, action)=>{
                console.log('pending user register');
            })
            .addCase(registerUser.fulfilled,(state, action)=>{
                console.log('User Registered Successfully');
            })
            .addCase(registerUser.rejected,(state, action)=>{
                state.error = action.payload as string;
            });
    }
})
export default userSlice.reducer;