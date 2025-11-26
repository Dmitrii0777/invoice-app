import { useInvoices } from "../../../provider/invoices";
import { Container } from "../../../layout";
import {
  DetailsFooterActions,
  DetailsHeader,
  DetailsContent,
} from "../components/details";
import GoBackButton from "../components/details/GoBackButton";
import { useParams } from "react-router-dom";

const InvoicesDetailsRoute = () => {
  const { id } = useParams<{ id: string }>();
  const { invoices } = useInvoices();

  const invoice = invoices.find((invoice) => invoice.id === id);

  if (!invoice) return <div>Invoice not found</div>;

  return (
    <div className="py-28 md:pt-32 md:pb-5 lg:pt-16">
      <Container>
        <GoBackButton />
        <DetailsHeader status={invoice.status} />
        <DetailsFooterActions />
        <DetailsContent invoice={invoice} />
      </Container>
    </div>
  );
};

export default InvoicesDetailsRoute;
