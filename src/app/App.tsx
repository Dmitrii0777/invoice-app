import { MainLayout } from "../layout";
import InvoicesRoute from "../features/invoices/routes/InvoicesRoute";

function App() {
  return (
    <MainLayout>
      <InvoicesRoute />
    </MainLayout>
  );
}

export default App;
