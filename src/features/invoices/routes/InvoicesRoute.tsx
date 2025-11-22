import { Container } from "../../../layout";
import InvoicesHeader from "../../../layout/InvoicesHeader";
import InvoiceList from "../components/InvoiceList";

export default function InvoicesRoute() {
  return (
    <Container>
      <InvoicesHeader />
      <InvoiceList />
    </Container>
  );
}
