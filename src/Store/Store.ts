import {configureStore} from "@reduxjs/toolkit";
import CropSlice from "../Reducer/CropSlice.ts";
import EquipmentSlice from "../Reducer/EquipmentSlice.ts";
import FiledSlice from "../Reducer/FiledSlice.ts";
import LogSlice from "../Reducer/LogSlice.ts";
import SignUpSlice from "../Reducer/SignUpSlice.ts";
import StaffSlice from "../Reducer/StaffSlice.ts";
import VehicleSlice from "../Reducer/VehicleSlice.ts";
import UserSlice from "../Reducer/UserSlice.ts";
import ModelSlice from "../Reducer/ModelSlice.ts";

export const store = configureStore({
    reducer: {
        crops:CropSlice,
        equipments:EquipmentSlice,
        fields:FiledSlice,
        logs:LogSlice,
        signUp:SignUpSlice,
        staffs:StaffSlice,
        vehicles:VehicleSlice,
        users : UserSlice,
        modal:ModelSlice
    }
});
export type AppDispatch = typeof store.dispatch;