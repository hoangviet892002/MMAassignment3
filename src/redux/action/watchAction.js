export const getProducts = (products) => ({
  type: "GET_PRODUCTS",
  payload: products,
});
export const getWatch = (productID) => ({
  type: "GET_WATCH",
  payload: productID,
});

export const favourites = (productID) => ({
  type: "FAVOURITES",
  payload: productID,
});
