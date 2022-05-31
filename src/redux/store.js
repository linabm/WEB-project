import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./wishRedux";


export const store = configureStore({
    reducer: {
      cart: wishReducer,
    },
});
  