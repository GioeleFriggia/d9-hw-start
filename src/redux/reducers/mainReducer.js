// reducers/mainReducer.js

import {
  FETCH_SEARCH_RESULTS_REQUEST,
  FETCH_SEARCH_RESULTS_SUCCESS,
  FETCH_SEARCH_RESULTS_FAILURE,
} from "../actions";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case FETCH_SEARCH_RESULTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
