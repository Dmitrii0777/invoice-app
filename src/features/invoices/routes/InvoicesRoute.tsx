import { useState } from "react";
import { Container, Header } from "../../../layout";

// import type { Invoice } from "../types/invoice.types";
import type { InvoiceFilterStatus } from "../types/invoice.types";

import InvoiceList from "../components/InvoiceList";
import { useInvoices } from "../../../provider/invoices";

export default function InvoicesRoute() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<InvoiceFilterStatus>("all");
  const { invoices } = useInvoices();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const filteredInvoices =
    status === "all"
      ? invoices
      : invoices.filter((invoice) => invoice.status === status);

  return (
    <div className="pt-28 pb-5 md:pt-36 lg:pt-20">
      <Container>
        <Header
          isOpen={isOpen}
          toggle={handleToggle}
          onChangeStatus={setStatus}
        />
        <InvoiceList invoices={filteredInvoices} />
      </Container>
    </div>
  );
}
