import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ModalProvider, ModalRoot } from "../provider/modal";

const App = () => {
  return (
    <ModalProvider>
      <ModalRoot />
      <RouterProvider router={router} />;
    </ModalProvider>
  );
};

export default App;
