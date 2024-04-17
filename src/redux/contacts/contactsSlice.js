import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContacts,
  fetchContacts,
  updateContacts,
} from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  isError: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        state.isError = null;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.contacts.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        const index = state.contacts.findIndex(
          contact => contact._id === payload._id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, handleRejected)
      .addCase(updateContacts.pending, handlePending)
      .addCase(updateContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.contacts = state.contacts.map(contact =>
          contact._id === payload._id ? payload : contact
        );
      })
      .addCase(updateContacts.rejected, handleRejected);
  },
});

export const ContactsReducer = contactsSlice.reducer;
