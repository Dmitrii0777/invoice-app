import StatusBadge from "../../../components/common/StatusBadge";
import { Arrow } from "../../../components/ui/Arrow";
import type { Invoice } from "../types/invoice.types";

interface InvoiceCardProps {
  invoice: Invoice;
}

export default function InvoiceCard({ invoice }: InvoiceCardProps) {
  const { id, paymentDue, clientName, total } = invoice;

  return (
    <article className="bg-bgAlt mt-10 rounded-lg p-8 shadow-sm">
      <div
        className="
        flex flex-col gap-4 justify-between 
        md:flex-row md:items-center"
      >
        <h3>
          <span>#</span>
          {id}
        </h3>
        <p>{paymentDue}</p>
        <p>{clientName}</p>
        <p>£ {total}</p>
        <div>
          <StatusBadge />
        </div>
        <Arrow className="hidden md:inline-block" direction="left" />
      </div>
    </article>
  );
}
