import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userOfBloggingApp",
  initialState: {
    currentUserOfBloggingAppOfBloggingApp: null,
    error: null,
    loading: false,
  },
  reducers: {
    SignInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUserOfBloggingApp = action.payload;
      state.error = null;
      state.loading = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currentUserOfBloggingApp = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    deleteUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => {
      state.currentUserOfBloggingApp = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess: (state) => {
      state.currentUserOfBloggingApp = null;
      state.error = null;
      state.loading = false;
    },
  },
});


export const { SignInStart, signInSuccess, signInFailure, updateStart, updateFailure, updateSuccess, deleteUserStart, deleteUserSuccess, deleteUserFailure, signoutSuccess } = userSlice.actions

export default userSlice.reducer