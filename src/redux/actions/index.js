export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const SET_LOADING_MYPROFILE = "SET_LOADING_MYPROFILE";
export const GET_MYPROFILE_ERROR = "GET_MYPROFILE_ERROR";
export const UPDATE_PROFILE_LOADING = "UPDATE_PROFILE_LOADING";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_ERROR = "UPDATE_PROFILE_ERROR";
export const GET_MY_EXPERIENCE = "GET_MY_EXPERIENCE";
export const SET_LOADING_MYEXPERIENCE = "SET_LOADING_MYEXPERIENCE";
export const GET_EXPERIENCE_ERROR = "GET_EXPERIENCE_ERROR";
export const GET_RANDOM_USERS = "GET_RANDOM_USERS";
export const GET_RANDOM_SUCCESS = "GET_RANDOM_SUCCESS";
export const GET_RANDOM_ERROR = "GET_RANDOM_ERROR";
export const SEARCH_PROFILE_BY_NAME_LOADING = "SEARCH_PROFILE_BY_NAME_LOADING";
export const SEARCH_PROFILE_BY_NAME_SUCCESS = "SEARCH_PROFILE_BY_NAME_SUCCESS";
export const SEARCH_PROFILE_BY_NAME_ERROR = "SEARCH_PROFILE_BY_NAME_ERROR";

import TOKEN from "../../../token";

// Funzione per ottenere il profilo dell'utente
export const getMyProfile = (userId = "me") => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING_MYPROFILE });
    try {
      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      if (!resp.ok) throw new Error("Errore nella fetch");
      let fetchedMyProfile = await resp.json();
      dispatch({ type: GET_MY_PROFILE, payload: fetchedMyProfile });
    } catch (error) {
      dispatch({ type: GET_MYPROFILE_ERROR, error: error.message });
    }
  };
};

// Funzione per aggiornare il profilo dell'utente
export const updateMyProfile = (updatedData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PROFILE_LOADING });

      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Errore nell'aggiornamento del profilo");
      }

      const data = await response.json();

      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UPDATE_PROFILE_ERROR, payload: error.message });
    }
  };
};

// Funzione per ottenere le esperienze dell'utente
export const getMyExperience = () => {
  return async (dispatch, getState) => {
    dispatch({ type: SET_LOADING_MYEXPERIENCE });
    try {
      const state = getState();
      const userId = state.myProfile.content?._id;

      if (!userId) throw new Error("Utente non trovato");

      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      if (!resp.ok) throw new Error("Errore nella fetch");
      let fetchedMyExperience = await resp.json();
      dispatch({ type: GET_MY_EXPERIENCE, payload: fetchedMyExperience });
    } catch (error) {
      dispatch({ type: GET_EXPERIENCE_ERROR, error: error.message });
    }
  };
};

// Funzione per ottenere utenti casuali
export const fetchRandomUsers = () => {
  return async (dispatch) => {
    dispatch({ type: GET_RANDOM_USERS });
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nella fetch");
      }
      const profiles = await response.json();
      const randomSix = profiles.sort(() => Math.random() - 0.5).slice(0, 6);
      dispatch({ type: GET_RANDOM_SUCCESS, payload: randomSix });
      // console.log("random 3:", randomThree);
    } catch (error) {
      dispatch({ type: GET_RANDOM_ERROR, payload: error.message });
    }
  };
};

export const GET_OTHER_PROFILE = "GET_OTHER_PROFILE";
export const SET_LOADING_OTHER_PROFILE = "SET_LOADING_OTHER_PROFILE";
export const GET_OTHER_PROFILE_ERROR = "GET_OTHER_PROFILE_ERROR";

export const getUserProfile = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING_OTHER_PROFILE });
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error("Errore nella fetch");
      }

      const data = await response.json();
      dispatch({ type: GET_OTHER_PROFILE, payload: data });
    } catch (error) {
      dispatch({ type: GET_OTHER_PROFILE_ERROR, payload: error.message });
    }
  };
};
//aggiornare experience other user

export const GET_OTHER_EXPERIENCE = "GET_OTHER_EXPERIENCE";
export const SET_LOADING_OTHER_EXPERIENCE = "SET_LOADING_OTHER_EXPERIENCE";
export const GET_OTHER_EXPERIENCE_ERROR = "GET_OTHER_EXPERIENCE_ERROR";

export const getExperienceByUserId = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING_OTHER_EXPERIENCE });
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error("Errore nella fetch");
      }

      const data = await response.json();
      dispatch({ type: "GET_OTHER_EXPERIENCE", payload: data });
    } catch (error) {
      dispatch({ type: "GET_OTHER_EXPERIENCE_ERROR", payload: error.message });
    }
  };
};
