const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JOBS_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_JOBS_SUCCESS":
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      };
    case "FETCH_JOBS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const fetchJobs = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_JOBS_START" });
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs");
      const data = await response.json();
      dispatch({
        type: "FETCH_JOBS_SUCCESS",
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_JOBS_ERROR", payload: error.message });
    }
  };
};

export default jobsReducer;
