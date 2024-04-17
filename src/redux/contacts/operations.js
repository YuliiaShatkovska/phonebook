import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3003/api';
axios.defaults.baseURL = 'https://goit-node-rest-api-n6pg.onrender.com/api';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');

      return data.result;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post(
        '/contacts',
        newContact
        // , {
        //   headers: { 'Content-Type': 'application/json' },
        // }
      );

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (_id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${_id}`);

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const updateContacts = createAsyncThunk(
  'contacts/updateContact',
  async ({ _id, editedContact }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/contacts/${_id}`, editedContact);

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
