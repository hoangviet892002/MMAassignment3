const initialState = {
  brand: [],
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BRAND":
      return {
        ...state,
        brand: action.payload,
      };
    default:
      return state;
  }
};
export default brandReducer;
