import StatusBadge from "../../../components/common/StatusBadge";
import { Arrow } from "../../../components/ui/Arrow";
import type { Invoice } from "../types/invoice.types";

interface InvoiceCardProps {
  invoice: Invoice;
}

export default function InvoiceCard({ invoice }: InvoiceCardProps) {
  const { id, paymentDue, clientName, total } = invoice;

  return (
    <article
      className="
        grid items-center justify-between
        [grid-template-areas:'id_client'_'due_due'_'total_status']
        md:[grid-template-columns:auto_auto_1fr_auto_auto_auto]
        md:[grid-template-areas:'id_due_client_total_status_arrow']
        md:gap-7
        bg-bgAlt rounded-lg p-8 shadow-sm
      "
    >
      <h3
        className="[grid-area:id] mb-6 md:mb-0 font-bold"
        style={{ color: "var(--color-text-id)" }}
      >
        <span className="text-[#7e88c3]">#</span>
        {id}
      </h3>
      <p
        className="[grid-area:due] font-medium"
        style={{ color: "var(--color-text-due)" }}
      >
        {paymentDue}
      </p>
      <p
        className="[grid-area:client] mb-6 md:mb-0 font-medium"
        style={{ color: "var(--color-text-client)" }}
      >
        {clientName}
      </p>
      <p
        className="[grid-area:total] font-bold"
        style={{ color: "var(--color-text-total)" }}
      >
        £ {total}
      </p>
      <div className="[grid-area:status]">
        <StatusBadge />
      </div>
      <Arrow
        direction="left"
        className="hidden md:inline-block [grid-area:arrow]"
      />
    </article>
  );
}
