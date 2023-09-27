import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    authReducer: authSlice,
  },
});

export default store;
