import { Arrow } from "../components/ui/Arrow";
import Button from "../components/ui/button/Button";
import InvoiceFilters from "../features/invoices/components/filters/InvoiceFilters";
import type { InvoiceFilterStatus } from "../features/invoices/types/invoice.types";

type InvoiceFilterProp = {
  isOpen: boolean;
  toggle: () => void;
  onChangeStatus: (status: InvoiceFilterStatus) => void;
};

export default function InvoicesHeader({
  toggle,
  isOpen,
  onChangeStatus,
}: InvoiceFilterProp) {
  return (
    <header className=" flex items-center justify-between">
      <div>
        <h1
          className="
          text-2xl md:text-4xl font-bold
          mb-1 md:mb-2
          "
        >
          Invoices
        </h1>
        <p className="text-xs text-slate-500/70 hidden md:block">
          There are<span> 7 </span>total invoices
        </p>
        <p className="text-xs text-slate-500/70 md:hidden">
          <span> 7 </span> invoices
        </p>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <div className="relative">
          <button className="flex items-center " onClick={toggle}>
            <span className="font-bold mr-3 md:mr-4">
              Filter <span className="hidden md:inline">by status</span>
            </span>
            <Arrow open={isOpen} />
          </button>
          {isOpen && <InvoiceFilters onChange={onChangeStatus} />}
        </div>

        <Button
          className="
          flex items-center gap-4 text-white"
          variant="bg-primary"
        >
          <span
            className="
            w-8 h-8 bg-white rounded-full relative 
            before:content-[''] before:absolute before:left-1/2 before:top-1/2
            before:w-3 before:h-[2px] before:bg-[#7C5DFA] 
            before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-90
            after:content-[''] after:absolute after:left-1/2 after:top-1/2
            after:w-3 after:h-[2px] after:bg-[#7C5DFA] 
            after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-180
          "
          ></span>
          <span>
            New<span className="hidden md:inline"> Invoice</span>
          </span>
        </Button>
      </div>
    </header>
  );
}
