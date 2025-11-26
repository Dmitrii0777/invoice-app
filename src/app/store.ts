// External libraries
import { configureStore } from "@reduxjs/toolkit";

// Redux reducers / state
import invoiceReducer from "../features/store/invoice.slice";

export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
