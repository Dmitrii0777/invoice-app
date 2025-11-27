// useForm hook
import { useForm } from "react-hook-form";

// Zod resolver
import { zodResolver } from "@hookform/resolvers/zod";

// schema & types
import { invoiceSchema, type InvoiceFormType } from "../schema";

export function useInvoiceForm(defaultValue?: Partial<InvoiceFormType>) {
  return useForm<InvoiceFormType>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: defaultValue || {
      billForm: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      billTo: {
        clientName: "",
        clientEmail: "",
        streetAddress: "",
        city: "",
        postCode: "",
        country: "",
      },
      paymentInfo: {
        invoiceDate: "",
        paymentTerm: "",
        projectDescription: "",
      },
    },
  });
}
