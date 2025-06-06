import { START_LOADING, SET_RESULTS, SET_ERROR_WORK } from "../actions/index";

const initialState = {
  results: [],
  loading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_RESULTS:
      return {
        ...state,
        results: action.payload,
        loading: false,
      };

    case SET_ERROR_WORK:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default searchReducer;
