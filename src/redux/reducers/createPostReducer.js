import { OPEN_MODAL, CLOSE_MODAL, SET_CONTENT, SET_LOADING, SET_ERROR } from "../actions";

const initialState = {
  isOpen: false,
  content: "",
  loading: false,
  error: null,
};

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        content: "",
        loading: false,
        error: null,
      };
    case SET_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createPostReducer;
