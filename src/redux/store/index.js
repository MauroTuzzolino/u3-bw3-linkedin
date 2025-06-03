import { combineReducers, configureStore } from "@reduxjs/toolkit";

import myProfileReducer from "../reducers/myProfileReducer";
const rootReducer = combineReducers({
  profile: myProfileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
