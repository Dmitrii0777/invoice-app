// External libraries
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Local types
import type { Invoice, InvoiceStatus } from "../invoices/types/invoice.types";

// Local utils / data
import { mockInvoices } from "../invoices/lib/utils/mockData";

interface InvoiceState {
  invoices: Invoice[];
  filter: InvoiceStatus | "all";
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
    updateInvoiceStatus: (
      state,
      action: PayloadAction<{ id: string; status: InvoiceStatus }>
    ) => {
      const invoice = state.invoices.find(
        (invoice) => invoice.id === action.payload.id
      );
      if (invoice) {
        invoice.status = action.payload.status;
      }
    },
    setFilter: (state, action: PayloadAction<InvoiceStatus | "all">) => {
      state.filter = action.payload;
    },
  },
});

export const { addInvoice, deleteInvoice, setFilter, updateInvoiceStatus } =
  invoiceSlise.actions;

export default invoiceSlise.reducer;
