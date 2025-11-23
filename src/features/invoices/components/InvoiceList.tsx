import type { Invoice } from "../types/invoice.types";
import InvoiceCard from "./InvoiceCard";

type InvoiceListProps = {
  invoices: Invoice[];
};

function InvoiceList({ invoices }: InvoiceListProps) {
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
