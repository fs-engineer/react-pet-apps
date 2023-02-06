import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  fetchCurrentUser,
  registration,
  login,
  logout,
} from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
  isRefreshing: false,
};

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(fetchCurrentUser.pending, (state, _) => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
