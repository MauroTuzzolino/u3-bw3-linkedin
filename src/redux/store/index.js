import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../reducers/profileSlice";

const store = configureStore({
  reducer: {
    profile: profileSlice,
  },
});

export default store;
