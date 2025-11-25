import { useState, type ReactNode } from "react";
import { InvoicesContext } from "./InvoicesContext";
import type { Invoice } from "../../features/invoices/types/invoice.types";
import { mockInvoices } from "../../features/invoices/lib/utils/mockData";

interface InvoicesProps {
  children: ReactNode;
}

const InvoicesProvider = ({ children }: InvoicesProps) => {
  const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices);

  const deleteInvoice = (id: string) => {
    setInvoices((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <InvoicesContext.Provider value={{ invoices, deleteInvoice }}>
      {children}
    </InvoicesContext.Provider>
  );
};

export default InvoicesProvider;
