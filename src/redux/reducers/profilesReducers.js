import { GET_RANDOM_USERS, GET_RANDOM_SUCCESS, GET_RANDOM_ERROR } from "../actions/index";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_RANDOM_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case GET_RANDOM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profilesReducer;
