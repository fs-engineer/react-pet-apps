import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as authOperations from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
};

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.registration.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled]: (state, _) => {
      state.user = initialState.user;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
