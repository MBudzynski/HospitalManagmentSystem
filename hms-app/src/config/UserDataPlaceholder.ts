import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type {UserData} from "../dto/UserData.ts";

export interface State {
    userData: UserData;
}

const initialState: State = {
    userData: {
        userUUID: "",
        userLogin: "",
        displayServiceDeskName: "",
        pronouncedNumberPrefix: "",
        pronouncedServiceDeskName: ""
    },
};

export const userDataPlaceholder= createSlice({
    name: "userDataPlaceholder",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload;
        },
    },
});
export const { setUserData } = userDataPlaceholder.actions;
export const getUserData = (state: RootState) => state.user.userData;
export default userDataPlaceholder.reducer;