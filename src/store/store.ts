import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PostApi } from "../services/PostService";
// import UserSlice from "./reducers/UserSlice";

const rootReduser = combineReducers({
  // UserSlice,
  [PostApi.reducerPath]: PostApi.reducer,
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
