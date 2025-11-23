import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout";
import InvoicesRoute from "../features/invoices/routes/InvoicesRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <InvoicesRoute /> }],
  },
]);
