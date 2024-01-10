import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};
// Then we can create userSlice, then we set a name to it, then we pass the initial state, then we create functions, which here are referred to as reducers
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // In the sign in start, we have the laoding as true, basically here we are having everything as global
        signInStart: (state) => {
            state.loading = true;
        },
        // Action is the data that we receive from the database 
        signInSuccess: (state, action) => {
            // action.payload is the data that we get 
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        //Then we have sign in failure definition
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});
// Then we have to export all these reducers, we can later use these in places like sign in, etc
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

//and then we export userSlice as default
export default userSlice.reducer;