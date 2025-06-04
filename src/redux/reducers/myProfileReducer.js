//qui verrà cambiato lo stato solo del mio componente (No globale!)
//importo l'azione
import { GET_MY_PROFILE } from "../actions";
//setto lo stato iniziale come deve essere
const initialState = {
  content: null,
};

//qquando non ci sono azioni, vado nello stato di default (vedi sopra). Altirmenti, se ricevo azioni (come Get_My_profile),
// aggiorno lo stato con il contenuto (payload) che ha il mio amato e desiderato json.
const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default myProfileReducer;
