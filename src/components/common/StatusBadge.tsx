import type { InvoiceStatus } from "../../features/invoices/types/invoice.types";

interface StatusProps {
  status: InvoiceStatus;
}

export default function StatusBadge({ status }: StatusProps) {
  const statusStyles = {
    paid: {
      bg: "bg-[rgba(var(--status-paid),0.1)]",
      text: "text-[rgb(var(--status-paid))]",
      dot: "bg-[rgba(var(--status-paid))]",
    },
    pending: {
      bg: "bg-[rgba(var(--status-pending),0.1)]",
      text: "text-[rgb(var(--status-pending))]",
      dot: "bg-[rgba(var(--status-pending))]",
    },
    draft: {
      bg: "bg-[rgba(var(--status-draft),0.1)]",
      text: "text-[rgb(var(--status-draft))]",
      dot: "bg-[rgba(var(--status-draft))]",
    },
  }[status];

  return (
    <div
      className={`
        inline-flex items-center justify-center gap-1 w-[104px] 
         px-4 py-3 rounded-md ${statusStyles.bg}`}
    >
      <span className={`h-2 w-2 rounded-full mt-1 ${statusStyles.dot}`}></span>
      <span className={`text-[15px] font-bold ${statusStyles.text}`}>
        {status}
      </span>
    </div>
  );
}
