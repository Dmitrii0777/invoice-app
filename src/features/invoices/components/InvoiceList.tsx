import type { Invoice } from "../types/invoice.types";
import { mockInvoices } from "../lib/utils/mockData";
import InvoiceCard from "./InvoiceCard";

function InvoiceList() {
  const invoices: Invoice[] = mockInvoices;

  return (
    <ul>
      {invoices.length > 0 &&
        invoices.map((invoice) => (
          <li key={invoice.id}>
            <InvoiceCard invoice={invoice} />
          </li>
        ))}
    </ul>
  );
}

export default InvoiceList;
