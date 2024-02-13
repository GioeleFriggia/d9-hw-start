// searchResultsReducer.js

const initialState = {
  searchResults: [],
  loading: false,
  error: null,
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_SEARCH_RESULTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SEARCH_RESULTS_SUCCESS":
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_SEARCH_RESULTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
