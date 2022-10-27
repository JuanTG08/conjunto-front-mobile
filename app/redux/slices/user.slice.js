import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        emptyUser: (state, action) => {
            return initialState;
        }
    }
});

export const { setUser, emptyUser } = userSlice.actions;
export default userSlice.reducer;