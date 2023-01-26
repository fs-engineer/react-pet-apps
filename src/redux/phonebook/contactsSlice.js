import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, { payload }) {
      console.log(state);
      state.contacts.unshift(payload);
    },
    deleteContact(state, { payload }) {
      const idx = state.contacts.findIndex((contact) => contact.id === payload);
      state.contacts.splice(idx, 1);
    },
  },
});

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
