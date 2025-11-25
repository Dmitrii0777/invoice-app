import { createContext, useContext } from "react";
import type { Invoice } from "../../features/invoices/types/invoice.types";

interface InvoicesContextValue {
  invoices: Invoice[];
  deleteInvoice: (id: string) => void;
}

export const InvoicesContext = createContext<InvoicesContextValue | null>(null);

export const useInvoices = () => {
  const invoices = useContext(InvoicesContext);

  if (!invoices) {
    throw new Error("useInvoice must be used inside InvoicesProvider");
  }

  return invoices;
};
