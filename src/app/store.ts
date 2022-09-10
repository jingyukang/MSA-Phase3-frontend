import { configureStore } from "@reduxjs/toolkit";
// import cartItemReducer from "../slice/cartItem";
import itemsReducer from "../slice/items";
// import restItemQuantityReducer from "../slice/restItemQuantity";
// import invoiceReducer from "../slice/invoice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    // cartItem: cartItemReducer,
    // restItemNum: restItemQuantityReducer,
    // invoices: invoiceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
