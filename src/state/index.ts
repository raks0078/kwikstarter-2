import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import app from "./app/reducer";
import stake from "./stake/reducer";

const store = configureStore({
  reducer: {
    app,
    stake,
  },
  middleware: [...getDefaultMiddleware({ thunk: false })],
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
