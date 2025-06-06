import {
  GET_MY_EXPERIENCE,
  SET_LOADING_MYEXPERIENCE,
  GET_EXPERIENCE_ERROR,
  UPDATE_EXPERIENCE_LOADING,
  UPDATE_EXPERIENCE_SUCCESS,
  UPDATE_EXPERIENCE_ERROR,
  CREATE_EXPERIENCE_SUCCESS,
  DELETE_EXPERIENCE_SUCCESS,
} from "../actions";

const initialState = {
  content: [],
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
    case UPDATE_EXPERIENCE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_EXPERIENCE_ERROR:
    case UPDATE_EXPERIENCE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        content: state.content.map((exp) => (exp._id === action.payload._id ? action.payload : exp)),
      };

    case CREATE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        content: [...state.content, action.payload],
        loading: false,
        error: null,
      };
    case DELETE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        content: state.content.filter((exp) => exp._id !== action.payload),
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default experienceReducer;
