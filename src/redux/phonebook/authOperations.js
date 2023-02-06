import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosToken } from "../../helpers/axiosToken";

const URL = process.env.REACT_APP_CONTACTS_API_URL;

export const registration = createAsyncThunk(
  "auth/registration",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/users/signup`, userData);

      const token = response?.data?.token;
      axiosToken.set(token);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/users/login`, userData);

      const token = response?.data?.token;

      axiosToken.set(token);

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post(`${URL}/users/logout`);

    axiosToken.unset();

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    console.log("Auth token ", token);

    if (!token) {
      return thunkAPI.rejectWithValue("No token");
      // return state;
    }

    axiosToken.set(token);

    try {
      const response = await axios.get(`${URL}/users/current`);

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
