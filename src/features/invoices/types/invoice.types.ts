export type InvoiceStatus = "paid" | "pending" | "draft";

export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Invoice {
  id: string;
  createAt: string;
  paymentDue: string;
  clientName: string;
  clientEmail: string;
  description: string;
  status: InvoiceStatus;
  senderAddress: Address;
  clientAddress: Address;
  items: InvoiceItem[];
  total: number;
}
