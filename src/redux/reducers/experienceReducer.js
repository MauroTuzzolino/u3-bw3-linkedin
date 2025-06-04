import { GET_MY_EXPERIENCE, SET_LOADING_MYEXPERIENCE, GET_EXPERIENCE_ERROR } from "../actions";

const initialState = {
  content: null,
  loading: false,
  error: null,
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_EXPERIENCE:
      return {
        ...state,
        content: action.payload,
        loading: false,
        error: null,
      };

    case SET_LOADING_MYEXPERIENCE:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_EXPERIENCE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default experienceReducer;
