import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        content: state.content.filter((job) => job.company_name !== action.payload.company_name),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
