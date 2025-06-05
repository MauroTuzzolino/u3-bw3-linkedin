import {
  GET_MY_PROFILE,
  SET_LOADING_MYPROFILE,
  GET_MYPROFILE_ERROR,
  SEARCH_PROFILE_BY_NAME_LOADING,
  SEARCH_PROFILE_BY_NAME_SUCCESS,
  SEARCH_PROFILE_BY_NAME_ERROR,
} from "../actions/index";

import TOKEN from "../../../token";

// Creo la funzione asincrona che sarà un thunk: riceve un nome da cercare e fa le chiamate API
export const searchProfileByName = (name) => async (dispatch) => {
  // Prima di tutto, segnalo che sta partendo una ricerca
  dispatch({ type: SEARCH_PROFILE_BY_NAME_LOADING });

  try {
    // Faccio una fetch per ottenere TUTTI i profili
    const searchResponse = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!searchResponse.ok) {
      throw new Error("Errore nella richiesta dei profili");
    }

    const profiles = await searchResponse.json();

    // Tra tutti i profili, cerco quello che ha il nome che include la mia query
    const profile = profiles.find((p) => p.name.toLowerCase().includes(name.toLowerCase()));

    if (!profile) {
      throw new Error("Profilo non trovato");
    }

    // Se invece trovo il profilo giusto, faccio un'altra chiamata per ottenere i dettagli completi
    const profileResponse = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profile._id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    // Se la seconda fetch fallisce, sollevo un errore
    if (!profileResponse.ok) {
      throw new Error("Errore nel recupero del profilo dettagliato");
    }

    // Estraggo i dati completi del profilo
    const profileData = await profileResponse.json();

    // Comunico al reducer che la ricerca è andata a buon fine e passo i dati ottenuti
    dispatch({ type: SEARCH_PROFILE_BY_NAME_SUCCESS, payload: profileData });

    // Aggiorno anche lo stato globale del profilo
    dispatch({ type: GET_MY_PROFILE, payload: profileData });
  } catch (error) {
    // Se qualcosa è andato storto, stampo l'errore in console per debugging
    console.error("Errore nella ricerca:", error.message);

    // Comunico al reducer che la ricerca ha fallito
    dispatch({ type: SEARCH_PROFILE_BY_NAME_ERROR, error: error.message });

    // Comunico anche al reducer del profilo che c'è stato un errore
    dispatch({ type: GET_MYPROFILE_ERROR, error: error.message });
  }
};
