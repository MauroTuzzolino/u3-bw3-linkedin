//qui verrà cambiato lo stato solo del mio componente (No globale!)
//importo l'azione
import { GET_MY_PROFILE, SET_LOADING_MYPROFILE, GET_MYPROFILE_ERROR, UPDATE_PROFILE_LOADING, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR } from "../actions";
//setto lo stato iniziale come deve essere
const initialState = {
  content: null,
  loading: false,
  error: null,
};

//qquando non ci sono azioni, vado nello stato di default (vedi sopra). Altirmenti, se ricevo azioni (come Get_My_profile),
// aggiorno lo stato con il contenuto (payload) che ha il mio amato e desiderato json.
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
        loading: FALSE,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default myProfileReducer;
