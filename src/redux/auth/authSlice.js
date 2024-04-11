import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isVerify: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {},
});

export const authReducer = authSlice.reducer;
