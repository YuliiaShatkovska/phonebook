import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

// axios.defaults.baseURL = 'http://localhost:3003/api';
axios.defaults.baseURL = 'https://goit-node-rest-api-n6pg.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', newUser);

      return data;
    } catch (error) {
      Notiflix.Notify.warning('Something went wrong! Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', user);
      setAuthHeader(data.token);

      return data;
    } catch (e) {
      Notiflix.Notify.warning('Something went wrong! Please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (e) {
      Notiflix.Notify.warning('Something went wrong! Please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistToken = thunkAPI.getState().auth.token;

    if (!persistToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistToken);
      const { data } = await axios.get('/users/current');

      return data;
    } catch (e) {
      Notiflix.Notify.warning('Something went wrong! Please try again!');
      return thunkAPI.rejectWithValue(e);
    }
  }
);
