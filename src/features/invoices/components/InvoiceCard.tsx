import StatusBadge from "../../../components/common/StatusBadge";
import { Arrow } from "../../../components/ui/Arrow";
import type { Invoice } from "../types/invoice.types";

interface InvoiceCardProps {
  invoice: Invoice;
}

export default function InvoiceCard({ invoice }: InvoiceCardProps) {
  const { id, paymentDue, clientName, total, status } = invoice;

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
      <h3 className="[grid-area:id] mb-6 md:mb-0 font-bold text-base text-textCardId">
        <span className="text-[#7e88c3]">#</span>
        {id}
      </h3>
      <p className="[grid-area:due] font-medium text-textCardDue">
        {paymentDue}
      </p>
      <p className="[grid-area:client] mb-6 md:mb-0 font-medium text-textCardClient">
        {clientName}
      </p>
      <p className="[grid-area:total] text-[15px] font-bold text-textCardTotal">
        £ {total}
      </p>
      <div className="[grid-area:status]">
        <StatusBadge status={status} />
      </div>
      <Arrow
        direction="left"
        className="hidden md:inline-block [grid-area:arrow]"
      />
    </article>
  );
}
