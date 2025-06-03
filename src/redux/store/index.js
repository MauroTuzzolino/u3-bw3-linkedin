import { combineReducers, configureStore } from "@reduxjs/toolkit";

import myProfileReducer from "../reducers/myProfileReducer";

// faccio la fusione di tutti gli stati dei miei RxComponentInstance, in questo modo cambia lo stato globale
const rootReducer = combineReducers({
  profile: myProfileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
//lo stato globale cambia
export default store;
