const initialState = {
  products: [],
  watch: null,
};

const watchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "FAVOURITES":
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload) {
          let favourite = true;
          if (product.favourites === true) favourite = false;
          return { ...product, favourites: favourite };
        }
        return product;
      });
      const updatedWatch =
        state.watch && state.watch.id === action.payload
          ? { ...state.watch, favourites: !state.watch.favourites }
          : state.watch;
      return {
        ...state,
        products: updatedProducts,
        watch: updatedWatch,
      };
    case "GET_WATCH":
      let item = null;
      const watch = state.products.map((product) => {
        if (product.id === action.payload) {
          item = product;
          return product;
        }
      });
      return {
        ...state,
        watch: item,
      };
    default:
      return state;
  }
};
export default watchReducer;
