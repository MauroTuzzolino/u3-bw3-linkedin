//questa export viene fatto per sicurezza (?)

export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const SET_LOADING_MYPROFILE = "SET_LOADING_MYPROFILE";
export const GET_MYPROFILE_ERROR = "GET_MYPROFILE_ERROR";
import TOKEN from "../../../token";
import ProfileSection from "../../components/ProfileSection";
//questa è la funzione che viene chiamata. in questo vaso,  dall'UseEffect quando si carica il componente.
//codesta funzione me ne ritorna un'altra (matrioska)che mi fa  la fetch e mi metto il json dentro la var fetchedMyProfile
export const getMyProfile = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
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

export const UPDATE_PROFILE_LOADING = "UPDATE_PROFILE_LOADING";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_ERROR = "UPDATE_PROFILE_ERROR";

export const updateMyProfile = (updatedData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_PROFILE_LOADING" });

      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) {
        throw new Error("Errore nell'aggiornamento del profilo");
      }

      const data = await response.json();

      dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "UPDATE_PROFILE_ERROR", payload: error.message });
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
          Authorization: `Bearer ${TOKEN}`
        }
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

export const GET_RANDOM_USERS = "GET_RANDOM_USERS";
export const GET_RANDOM_SUCCESS = "GET_RANDOM_SUCCESS";
export const GET_RANDOM_ERROR = "GET_RANDOM_ERROR";

export const fetchRandomUsers = () => {
  return async (dispatch) => {
    dispatch({ type: GET_RANDOM_USERS });
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      });
      if (!response.ok) {
        throw new Error("Errore nella fetch");
      }
      const profiles = await response.json();
      const randomThree = profiles.sort(() => Math.random() - 0.5).slice(0, 3);
      dispatch({ type: GET_RANDOM_SUCCESS, payload: randomThree });
      console.log("random 3:", randomThree);
    } catch (error) {
      dispatch({ type: GET_RANDOM_ERROR, payload: error.message });
    }
  };
};
export const UPDATE_EXPERIENCE_LOADING = "UPDATE_EXPERIENCE_LOADING";
export const UPDATE_EXPERIENCE_SUCCESS = "UPDATE_EXPERIENCE_SUCCESS";
export const UPDATE_EXPERIENCE_ERROR = "UPDATE_EXPERIENCE_ERROR";

export const updateExperience = (userId, expId, updatedExperience) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_EXPERIENCE_LOADING });

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify(updatedExperience)
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: UPDATE_EXPERIENCE_SUCCESS,
        payload: data
      });
    } else {
      throw new Error("Errore durante l'aggiornamento dell'esperienza");
    }
  } catch (error) {
    dispatch({
      type: UPDATE_EXPERIENCE_ERROR,
      payload: error.message
    });
  }
};

export const CREATE_EXPERIENCE_LOADING = "CREATE_EXPERIENCE_LOADING";
export const CREATE_EXPERIENCE_SUCCESS = "CREATE_EXPERIENCE_SUCCESS";
export const CREATE_EXPERIENCE_ERROR = "CREATE_EXPERIENCE_ERROR";

export const createExperience = (userId, newExperience) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_EXPERIENCE_LOADING });

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify(newExperience)
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: CREATE_EXPERIENCE_SUCCESS,
        payload: data
      });
    } else {
      throw new Error("Errore durante la creazione dell'esperienza");
    }
  } catch (error) {
    dispatch({
      type: CREATE_EXPERIENCE_ERROR,
      payload: error.message
    });
  }
};

export const DELETE_EXPERIENCE_LOADING = "DELETE_EXPERIENCE_LOADING";
export const DELETE_EXPERIENCE_SUCCESS = "DELETE_EXPERIENCE_SUCCESS";
export const DELETE_EXPERIENCE_ERROR = "DELETE_EXPERIENCE_ERROR";

export const deleteExperience = (userId, expId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_EXPERIENCE_LOADING });

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });

    if (response.ok) {
      dispatch({
        type: DELETE_EXPERIENCE_SUCCESS,
        payload: expId
      });
    } else {
      throw new Error("Errore durante l'eliminazione dell'esperienza");
    }
  } catch (error) {
    dispatch({
      type: DELETE_EXPERIENCE_ERROR,
      payload: error.message
    });
  }
};

export const FETCH_POSTS_START = "FETCH_POSTS_START";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_POSTS_START });
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
    }
  };
};

// Creazione di post

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SET_CONTENT = "SET_CONTENT";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const openModal = () => ({ type: OPEN_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const setContent = (content) => ({ type: SET_CONTENT, payload: content });
export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
export const setError = (error) => ({ type: SET_ERROR, payload: error });

export const submitPost = (content) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(null));

  try {
    const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
      body: JSON.stringify({ text: content }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Errore invio post");
    }

    dispatch(closeModal());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
