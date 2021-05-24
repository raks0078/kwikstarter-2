import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import app from "./app/reducer";

const store = configureStore({
  reducer: {
    app,
  },
  middleware: [...getDefaultMiddleware({ thunk: false })],
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
