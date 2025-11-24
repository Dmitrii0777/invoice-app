import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout";
import {
  InvoicesRoute,
  InvoicesDetailsRoute,
} from "../features/invoices/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <InvoicesRoute /> },
      { path: "invoice/:id", element: <InvoicesDetailsRoute /> },
    ],
  },
]);
