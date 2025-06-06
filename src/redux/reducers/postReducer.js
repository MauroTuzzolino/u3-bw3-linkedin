import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR
} from "../actions";

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))
      };

    case UPDATE_POST_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload)
      };
    case DELETE_POST_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default postsReducer;
