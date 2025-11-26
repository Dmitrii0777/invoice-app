import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  Invoice,
  InvoiceFilterStatus,
} from "../invoices/types/invoice.types";
import { mockInvoices } from "../invoices/lib/utils/mockData";

interface InvoiceState {
  invoices: Invoice[];
  filter: InvoiceFilterStatus;
}

const initialState: InvoiceState = {
  invoices: mockInvoices,
  filter: "all",
};

const invoiceSlise = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoice: (state, action: PayloadAction<Invoice>) => {
      state.invoices.unshift(action.payload);
    },
    deleteInvoice: (state, action: PayloadAction<string>) => {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== action.payload
      );
    },
  },
});

export const { addInvoice, deleteInvoice } = invoiceSlise.actions;

export default invoiceSlise.reducer;
