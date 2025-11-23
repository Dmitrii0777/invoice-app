import type { InvoiceFilterStatus } from "../../types/invoice.types";

type InvoiceFilterProp = {
  onChange: (status: InvoiceFilterStatus) => void;
};

export default function InvoiceFilters({ onChange }: InvoiceFilterProp) {
  return (
    <div
      className="
      flex flex-col p-6 items-start
      absolute top-10 left-0
      bg-bgDropdown rounded-lg"
    >
      <label
        className="text-txDrop font-bold text-sm pl-2 cursor-pointer"
        htmlFor="all"
        onClick={() => onChange("all")}
      >
        <input id="all" type="checkbox" />
        All
      </label>
      <label
        className="text-txDrop font-bold text-sm pl-2 cursor-pointer"
        htmlFor="draft"
        onClick={() => onChange("draft")}
      >
        <input id="draft" type="checkbox" />
        Draft
      </label>
      <label
        className="text-txDrop font-bold text-sm pl-2 cursor-pointer"
        htmlFor="pending"
        onClick={() => onChange("pending")}
      >
        <input id="pending" type="checkbox" />
        Pending
      </label>
      <label
        className="text-txDrop font-bold text-sm pl-2 cursor-pointer"
        htmlFor="paid"
        onClick={() => onChange("paid")}
      >
        <input id="paid" type="checkbox" />
        Paid
      </label>
    </div>
  );
}
