import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions/index";

const initialState = {
  list: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      if (state.list.includes(action.payload)) return state;
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case REMOVE_FAVOURITE:
      return {
        ...state,
        list: state.list.filter((company) => company !== action.payload),
      };

    default:
      return state;
  }
};

export default favouritesReducer;
