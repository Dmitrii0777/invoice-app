import StatusBadge from "../../../components/common/StatusBadge";
import { Arrow } from "../../../components/ui/Arrow";

export default function InvoiceCard() {
  return (
    <article className="bg-bgAlt mt-10 rounded-lg p-8 shadow-sm">
      <div
        className="
        flex flex-col gap-4 justify-between 
        md:flex-row lg:items-center"
      >
        <h3>
          <span>#</span>RT3080
        </h3>
        <p>Due 19 Aug 2021</p>
        <p>Jensen Huang</p>
        <p>£ 1,800.90</p>
        <div>
          <StatusBadge />
        </div>
        <Arrow className="hidden md:inline-block" direction="left" />
      </div>
    </article>
  );
}
