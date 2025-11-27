// Zod library for schema validation
import { z } from "zod";

export const invoiceSchema = z.object({
  billForm: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    postCode: z.string().min(1, "Post code is required"),
    country: z.string().min(1, "Country is required"),
  }),
});

export type InvoiceFormType = z.infer<typeof invoiceSchema>;
