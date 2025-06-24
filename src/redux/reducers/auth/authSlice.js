import { createSlice } from "@reduxjs/toolkit";
import { signInThunk, signUpThunk } from "../../actions/authActions";
import { ACCESS_TOKEN_KEY, USER_DETAILS_KEY } from "../../../utils/environment";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null, // Added error state
  userData: null, // To store user details upon successful sign-up
};

const storeUserData = (user, token) => {
  localStorage.setItem(USER_DETAILS_KEY, JSON.stringify(user));
  localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(token));
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = null;
      state.userData = null; // Reset user data on reset
    },

    logoutState: (state) => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(USER_DETAILS_KEY);
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload; // Store user data
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = action.payload; // Store error message
      })
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        storeUserData(action.payload.user, action.payload.token);
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState, logoutState } = authSlice.actions;
export default authSlice.reducer;
