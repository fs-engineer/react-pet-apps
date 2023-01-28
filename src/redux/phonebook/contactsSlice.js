import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fetchContacts, addContact, deleteContact } from "./operations";

const persistConfig = {
  key: "root",
  storage,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContact.rejected](state, { payload }) {
      state.error = payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;

      const idx = state.items.findIndex((item) => item.id === payload);
      state.items.splice(idx, 1);
    },
    [deleteContact.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
