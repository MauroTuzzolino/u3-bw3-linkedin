import { combineReducers, configureStore } from "@reduxjs/toolkit";

import myProfileReducer from "../reducers/myProfileReducer";
import experienceReducer from "../reducers/experienceReducer";
import profilesReducer from "../reducers/profilesReducers";
import otherProfileReducer from "../reducers/otherProfileReducer";
import otherExperienceReducer from "../reducers/experienceOtherProfiles";

// faccio la fusione di tutti gli stati dei miei RxComponentInstance, in questo modo cambia lo stato globale
const rootReducer = combineReducers({
  myProfile: myProfileReducer,
  experience: experienceReducer,
  profiles: profilesReducer,
  otherProfile: otherProfileReducer,
  otherExperience: otherExperienceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
//lo stato globale cambia
export default store;
