import { Container } from "../../../layout";
import { DetailsFooterActions, DetailsHeader } from "../components/details";

const InvoicesDetailsRoute = () => {
  return (
    <>
      <Container>
        <DetailsHeader />
        <DetailsFooterActions />
      </Container>
    </>
  );
};

export default InvoicesDetailsRoute;
