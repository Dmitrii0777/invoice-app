import { mockInvoices } from "../lib/utils/mockData";
import { Container } from "../../../layout";
import {
  DetailsFooterActions,
  DetailsHeader,
  DetailsContent,
} from "../components/details";
import GoBackButton from "../components/details/GoBackButton";

import type { Invoice } from "../types/invoice.types";

const InvoicesDetailsRoute = () => {
  const invoice: Invoice = mockInvoices[0];
  const { status } = invoice;

  return (
    <div className="py-28 md:pt-32 md:pb-5 lg:pt-16">
      <Container>
        <GoBackButton />
        <DetailsHeader status={status} />
        <DetailsFooterActions />
        <DetailsContent invoice={invoice} />
      </Container>
    </div>
  );
};

export default InvoicesDetailsRoute;
