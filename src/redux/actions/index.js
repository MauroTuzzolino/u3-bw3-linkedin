export const GET_MY_PROFILE = "GET_MY_PROFILE";

export const getMyProfile = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYmJhMmIxMGJmMDAwMTVjZjIyYWUiLCJpYXQiOjE3NDg5NDE3MzAsImV4cCI6MTc1MDE1MTMzMH0.QMzQFBg7glw1M5PUc8D7sDQCgXKRJAzIPjXaN-_XH_c`,
        },
      });
      if (resp.ok) {
        let fetchedMyProfile = await resp.json();
        dispatch({ type: GET_MY_PROFILE, payload: fetchedMyProfile });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
