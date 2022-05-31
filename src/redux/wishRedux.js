import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0, //bulle sur le coeur
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; 
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1; 
      state.products.pop(action.payload);
      state.total -= (action.payload)[0].quantity * (action.payload)[0].price;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
export const selectItems = (state) => state.cart.products;