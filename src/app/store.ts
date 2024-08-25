import { configureStore } from "@reduxjs/toolkit";
//import  authReducer  from '../lib/features/auth/authSlice'
import { authApi } from "../lib/services/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
