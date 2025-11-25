import type { InvoiceStatus } from "../../features/invoices/types/invoice.types";

interface StatusProps {
  status: InvoiceStatus;
}

export default function StatusBadge({ status }: StatusProps) {
  return (
    <div
      className="inline-flex w-28 items-center justify-center gap-2 px-4 py-3 rounded-md"
      style={{ backgroundColor: `rgba(var(--color-status-${status}), 0.1)` }}
    >
      <span
        className="h-2 w-2 rounded-full mt-1"
        style={{ backgroundColor: `rgb(var(--color-status-${status}))` }}
      ></span>
      <span
        className="font-bold"
        style={{ color: `rgb(var(--color-status-${status}))` }}
      >
        {status}
      </span>
    </div>
  );
}
