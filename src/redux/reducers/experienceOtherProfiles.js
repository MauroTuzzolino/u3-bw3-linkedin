import { GET_OTHER_EXPERIENCE, SET_LOADING_OTHER_EXPERIENCE, GET_OTHER_EXPERIENCE_ERROR } from "../actions";

const initialState = {
  experiences: [],
  loading: false,
  error: null,
};

const otherExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_OTHER_EXPERIENCE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_OTHER_EXPERIENCE:
      return {
        ...state,
        loading: false,
        experiences: action.payload,
        error: null,
      };
    case GET_OTHER_EXPERIENCE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default otherExperienceReducer;
