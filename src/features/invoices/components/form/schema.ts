// Zod library for schema validation
import { z } from "zod";

export const invoiceSchema = z.object({
  billForm: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    postCode: z.string().min(1, "Post code is required"),
    country: z.string().min(1, "Country is required"),
  }),
  billTo: z.object({
    clientName: z.string().min(1, "Client's Name is required"),
    clientEmail: z.string().min(1, "Client's Email is required"),
    streetAddress: z.string().min(1, "Street Address is required"),
    city: z.string().min(1, "City is required"),
    postCode: z.string().min(1, "Post Code is required"),
    country: z.string().min(1, "Country is required"),
  }),
  paymentInfo: z.object({
    invoiceDate: z.string().min(1, "Invoice Date is required"),
    paymentTerm: z.string().min(1, "Payment Terms is required"),
    projectDescription: z.string().min(1, "Project Description is required"),
  }),
  items: z.array(
    z.object({
      name: z.string().min(1),
      qty: z.number().min(1),
      price: z.number().min(1),
      total: z.number(),
    })
  ),
});

export type InvoiceFormType = z.infer<typeof invoiceSchema>;
