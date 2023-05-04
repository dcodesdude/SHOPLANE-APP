import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  wishListItems: [],
  atcBtnName: {
    name: "Add to Cart",
    color: "#0d6efd",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },

    removeFromCart(state, action) {
      state.cartItems.map(() => {
        const filteredCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = filteredCartItems;
      });
    },
    addToWishlist(state, action) {
      state.wishListItems.push(action.payload);
    },
    removeFromWishlist(state, action) {
      const filteredWishItems = state.wishListItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishListItems = filteredWishItems;
    },
    changeATCbtnName(state, action) {
      state.atcBtnName.name = action.payload.name;
      state.atcBtnName.color = action.payload.color;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  changeATCbtnName,
} = cartSlice.actions;
export default cartSlice.reducer;
