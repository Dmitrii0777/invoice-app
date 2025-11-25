import { useNavigate } from "react-router-dom";
import type { Invoice } from "../types/invoice.types";
import InvoiceCard from "./InvoiceCard";

type InvoiceListProps = {
  invoices: Invoice[];
};

function InvoiceList({ invoices }: InvoiceListProps) {
  const navigate = useNavigate();

  return (
    <ul>
      {invoices.length > 0 &&
        invoices.map((invoice) => (
          <li
            className="cursor-pointer"
            key={invoice.id}
            onClick={() => navigate(`/invoice/${invoice.id}`)}
          >
            <InvoiceCard invoice={invoice} />
          </li>
        ))}
    </ul>
  );
}

export default InvoiceList;
