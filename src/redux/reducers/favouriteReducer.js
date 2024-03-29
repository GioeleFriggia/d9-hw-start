// favouriteReducer.js

export const addToFavourite = (companyName) => ({
  type: "ADD_TO_FAVOURITE",
  payload: companyName,
});

export const removeFromFavourite = (companyName) => ({
  type: "REMOVE_FROM_FAVOURITE",
  payload: companyName,
});

const initialState = {
  list: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
