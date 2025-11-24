import { Container } from "../../../layout";
import {
  DetailsFooterActions,
  DetailsHeader,
  DetailsContent,
} from "../components/details";

const InvoicesDetailsRoute = () => {
  return (
    <>
      <Container>
        <DetailsHeader />
        <DetailsFooterActions />
        <DetailsContent />
      </Container>
    </>
  );
};

export default InvoicesDetailsRoute;
