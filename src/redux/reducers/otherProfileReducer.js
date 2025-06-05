import { GET_OTHER_PROFILE, GET_OTHER_PROFILE_ERROR, SET_LOADING_OTHER_PROFILE } from "../actions";

const initialState = {
  content: null,
  loading: false,
  error: null,
};

const otherProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OTHER_PROFILE:
      return {
        ...state,
        content: action.payload,
        loading: false,
        error: null,
      };
    case SET_LOADING_OTHER_PROFILE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_OTHER_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default otherProfileReducer;
