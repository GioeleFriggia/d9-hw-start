// actions.js

export const FETCH_SEARCH_RESULTS_REQUEST = "FETCH_SEARCH_RESULTS_REQUEST";
export const FETCH_SEARCH_RESULTS_SUCCESS = "FETCH_SEARCH_RESULTS_SUCCESS";
export const FETCH_SEARCH_RESULTS_FAILURE = "FETCH_SEARCH_RESULTS_FAILURE";

export const fetchSearchResultsRequest = () => ({
  type: FETCH_SEARCH_RESULTS_REQUEST,
});

export const fetchSearchResultsSuccess = (data) => ({
  type: FETCH_SEARCH_RESULTS_SUCCESS,
  payload: data,
});

export const fetchSearchResultsFailure = (error) => ({
  type: FETCH_SEARCH_RESULTS_FAILURE,
  payload: error,
});

export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    dispatch(fetchSearchResultsRequest());
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch(fetchSearchResultsSuccess(data));
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      dispatch(fetchSearchResultsFailure(error.message));
    }
  };
};
