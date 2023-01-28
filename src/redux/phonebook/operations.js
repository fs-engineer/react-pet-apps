import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CONTACTS_API_URL = "https://63d29d9e1780fd6ab9c94d58.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${CONTACTS_API_URL}/contacts`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post(`${CONTACTS_API_URL}/contacts`, {
        name,
        number,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${CONTACTS_API_URL}/contacts/${id}`);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
