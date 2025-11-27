import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
    },
  });
}
