import {
  GET_MY_PROFILE,
  SET_LOADING_MYPROFILE,
  GET_MYPROFILE_ERROR,
  UPDATE_PROFILE_LOADING,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_IMAGE_LOADING,
  UPDATE_PROFILE_IMAGE_SUCCESS,
  UPDATE_PROFILE_IMAGE_ERROR,
  SEARCH_PROFILE_BY_NAME_LOADING,
  SEARCH_PROFILE_BY_NAME_SUCCESS,
  SEARCH_PROFILE_BY_NAME_ERROR,
} from "../actions";

const initialState = {
  content: null,
  loading: false,
  error: null,
  imageLoading: false,
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        content: action.payload,
        loading: false,
        error: null,
      };
    case SET_LOADING_MYPROFILE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_MYPROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_PROFILE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        content: action.payload,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SEARCH_PROFILE_BY_NAME_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_PROFILE_BY_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        content: action.payload,
        error: null,
      };
    case SEARCH_PROFILE_BY_NAME_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PROFILE_IMAGE_LOADING:
      return {
        ...state,
        imageLoading: true,
        error: null,
      };

    case UPDATE_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        imageLoading: false,
        error: null,
      };

    case UPDATE_PROFILE_IMAGE_ERROR:
      return {
        ...state,
        imageLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default myProfileReducer;
