// External libraries
import { useParams } from "react-router-dom";

// Absolute / global imports (aliases)
import { Container } from "@/layout";
import { useAppSelect } from "@/app/hooks";

// Redux selectors
import { selectInvoiceById } from "@/features/store/invoice.selectors";

// Local components
import {
  DetailsFooterActions,
  DetailsHeader,
  DetailsContent,
} from "../components/details";
import GoBackButton from "../components/details/GoBackButton";

const InvoicesDetailsRoute = () => {
  const { id } = useParams<{ id: string }>();

  const invoice = useAppSelect(selectInvoiceById(id!));

  if (!invoice) return <div>Invoice not found</div>;

  return (
    <div className="py-28 md:pt-32 md:pb-5 lg:pt-16">
      <Container>
        <GoBackButton />
        <DetailsHeader status={invoice.status} />
        <DetailsContent invoice={invoice} />
        <DetailsFooterActions />
      </Container>
    </div>
  );
};

export default InvoicesDetailsRoute;
