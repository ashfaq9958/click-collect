// services/authApi.js
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { signInAPI, signUpAPI } from "../services/authApi";
// import { showNotification } from "../reducers/notification/notificationSlice";

// export const signUpThunk = createAsyncThunk(
//   "auth/signUp",
//   async (userData, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await signUpAPI(userData);
//       console.log(response);
//       dispatch(
//         showNotification({
//           type: "success",
//           message: "Account created successfully!",
//         })
//       );
//       return response;
//     } catch (error) {
//       const errorMessage =
//         error?.response?.data?.message ||
//         error?.message ||
//         "An unknown error occurred.";
//       dispatch(showNotification({ type: "error", message: errorMessage }));
//       return rejectWithValue(errorMessage);
//     }
//   }
// );

// export const signInThunk = createAsyncThunk(
//   "auth/signIn",
//   async (userData, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await signInAPI(userData);
//       dispatch(
//         showNotification({
//           type: "success",
//           message: "You have successfully login",
//         })
//       );
//       return response;
//     } catch (error) {
//       const errorMessage =
//         error?.response?.data?.message ||
//         error?.message ||
//         "An unknown error occurred";
//       dispatch(showNotification({ type: "error", message: errorMessage }));
//       return rejectWithValue(errorMessage);
//     }
//   }
// );

// services/authApi.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInAPI, signUpAPI } from "../services/authApi"; // Fixed import
import { showNotification } from "../reducers/notification/notificationSlice";

const extractErrorMessage = (error) => {
  return (
    error?.response?.data?.message ||
    error?.message ||
    "An unknown error occurred."
  );
};

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await signUpAPI(userData);
      dispatch(
        showNotification({
          type: "success",
          message: "Account created successfully!",
        })
      );
      return response; // Ensure only relevant data is returned
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      dispatch(showNotification({ type: "error", message: errorMessage }));
      console.error(error); // Log errors for debugging
      return rejectWithValue(errorMessage);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await signInAPI(userData);
      dispatch(
        showNotification({
          type: "success",
          message: "Login successful!",
        })
      );
      return response; // Ensure only relevant data is returned
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      dispatch(showNotification({ type: "error", message: errorMessage }));
      console.error(error); // Log errors for debugging
      return rejectWithValue(errorMessage);
    }
  }
);
