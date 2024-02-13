// reducers/mainReducer.js

const initialState = {
  favourite: {
    list: [],
  },
  loading: false,
  error: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        loading: true,
      };
    case "ADD_TO_FAVOURITE_SUCCESS":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
        loading: false,
      };
    case "ADD_TO_FAVOURITE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // Altri casi per gestire le azioni aggiuntive
    default:
      return state;
  }
};

export default mainReducer;
