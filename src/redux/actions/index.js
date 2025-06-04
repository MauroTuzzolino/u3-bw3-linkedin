//questa export viene fatto per sicurezza (?)

export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const SET_LOADING_MYPROFILE = "SET_LOADING_MYPROFILE";
export const GET_MYPROFILE_ERROR = "GET_MYPROFILE_ERROR";
import TOKEN from "../../../token";
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
