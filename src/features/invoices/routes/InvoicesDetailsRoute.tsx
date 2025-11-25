import { mockInvoices } from "../lib/utils/mockData";
import { Container } from "../../../layout";
import {
  DetailsFooterActions,
  DetailsHeader,
  DetailsContent,
} from "../components/details";

import type { Invoice } from "../types/invoice.types";
import GoBackButton from "../components/details/GoBackButton";

const InvoicesDetailsRoute = () => {
  const invoice: Invoice = mockInvoices[0];

  return (
    <>
      <Container>
        <GoBackButton />
        <DetailsHeader />
        <DetailsFooterActions />
        <DetailsContent invoice={invoice} />
      </Container>
    </>
  );
};

export default InvoicesDetailsRoute;
