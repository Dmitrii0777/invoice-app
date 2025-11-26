// External libraries
import { useState } from "react";

// Absolute / global imports (aliases)
import { Container, Header } from "@/layout";
import { useAppSelect, useAppDispatch } from "@/app/hooks";

// Redux selectors and actions
import { selectFilteredInvoices } from "@/features/store/invoice.selectors";
import { setFilter } from "@/features/store/invoice.slice";

// Local components
import InvoiceList from "../components/InvoiceList";

// Types
import type { InvoiceFilterStatus } from "../types/invoice.types";

export default function InvoicesRoute() {
  const dispatch = useAppDispatch();
  const invoices = useAppSelect(selectFilteredInvoices);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFilterChange = (filter: InvoiceFilterStatus) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="pt-28 pb-5 md:pt-36 lg:pt-20">
      <Container>
        <Header
          isOpen={isOpen}
          toggle={handleToggle}
          onChangeStatus={handleFilterChange}
        />
        <InvoiceList invoices={invoices} />
      </Container>
    </div>
  );
}
