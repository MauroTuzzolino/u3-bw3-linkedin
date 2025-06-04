//questa export viene fatto per sicurezza (?)

export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const SET_LOADING_MYPROFILE = "SET_LOADING_MYPROFILE";
export const GET_MYPROFILE_ERROR = "GET_MYPROFILE_ERROR";
import TOKEN from "../../../token";
import ProfileSection from "../../components/ProfileSection";
//questa è la funzione che viene chiamata. in questo vaso,  dall'UseEffect quando si carica il componente.
//codesta funzione me ne ritorna un'altra (matrioska)che mi fa  la fetch e mi metto il json dentro la var fetchedMyProfile
export const getMyProfile = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      if (!resp.ok) throw new Error("Errore nella fetch");
      if (resp.ok) {
        let fetchedMyProfile = await resp.json();
        //dispaccio (invio) la mia azione con il contenunto (payload) della mia fetch.
        dispatch({ type: GET_MY_PROFILE, payload: fetchedMyProfile });
      }
    } catch (error) {
      dispatch({ type: GET_MYPROFILE_ERROR, error: error.message });
    }
  };
};

export const GET_MY_EXPERIENCE = "GET_MY_EXPERIENCE";
export const SET_LOADING_MYEXPERIENCE = "SET_LOADING_MYEXPERIENCE";
export const GET_EXPERIENCE_ERROR = "GET_EXPERIENCE_ERROR";

export const getMyExperience = () => {
  return async (dispatch, getState) => {
    dispatch({ type: SET_LOADING_MYEXPERIENCE });
    try {
      //richiamo lo stato globale per accedere all'id
      const state = getState();
      const userId = state.profile.content?._id;

      if (!userId) throw new Error("Utente non trovato");

      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      if (!resp.ok) throw new Error("Errore nella fetch");
      if (resp.ok) {
        let fetchedMyExperience = await resp.json();
        dispatch({ type: GET_MY_EXPERIENCE, payload: fetchedMyExperience });
      }
    } catch (error) {
      dispatch({ type: GET_EXPERIENCE_ERROR, error: error.message });
    }
  };
};
