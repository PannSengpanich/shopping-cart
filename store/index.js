import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./product";

// can mutate the state unlike using reducer function

const store = configureStore({
  reducer: { product: productReducer },
});

export default store;
