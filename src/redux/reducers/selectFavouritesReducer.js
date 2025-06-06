import { SELECT_FAVOURITE } from "../actions";

const initialState = {
  content: null,
};

const selectFavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FAVOURITE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default selectFavouriteReducer;
