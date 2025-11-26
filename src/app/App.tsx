import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import { router } from "./router";
import { ModalProvider, ModalRoot } from "../provider/modal";
// import { InvoicesProvider } from "../provider/invoices";

const App = () => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <ModalRoot />
        <RouterProvider router={router} />;
      </ModalProvider>
    </Provider>
  );
};

export default App;
