// External libraries
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Local types
import type {
  Invoice,
  InvoiceFilterStatus,
} from "../invoices/types/invoice.types";

// Local utils / data
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
    setFilter: (state, action: PayloadAction<InvoiceFilterStatus>) => {
      state.filter = action.payload;
    },
  },
});

export const { addInvoice, deleteInvoice, setFilter } = invoiceSlise.actions;

export default invoiceSlise.reducer;
