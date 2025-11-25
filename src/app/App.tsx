import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ModalProvider, ModalRoot } from "../provider/modal";
import { InvoicesProvider } from "../provider/invoices";

const App = () => {
  return (
    <InvoicesProvider>
      <ModalProvider>
        <ModalRoot />
        <RouterProvider router={router} />;
      </ModalProvider>
    </InvoicesProvider>
  );
};

export default App;
