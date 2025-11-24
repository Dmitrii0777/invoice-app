import { mockInvoices } from "../lib/utils/mockData";
import { Container } from "../../../layout";
import {
  DetailsFooterActions,
  DetailsHeader,
  DetailsContent,
} from "../components/details";

import type { Invoice } from "../types/invoice.types";

const InvoicesDetailsRoute = () => {
  const invoice: Invoice = mockInvoices[0];

  return (
    <>
      <Container>
        <DetailsHeader />
        <DetailsFooterActions />
        <DetailsContent invoice={invoice} />
      </Container>
    </>
  );
};

export default InvoicesDetailsRoute;
