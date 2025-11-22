import type { Invoice } from "../../types/invoice.types";

export const mockInvoices: Invoice[] = [
  {
    id: "RT3080",
    createAt: "2021-08-18",
    paymentDue: "2021-08-19",
    description: "Graphic Design",
    clientName: "Jensen Huang",
    clientEmail: "jensenh@mail.com",
    status: "paid",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "106 Kendell Street",
      city: "Sharrington",
      postCode: "NR24 5WR",
      country: "United Kingdom",
    },
    items: [
      { id: 1, name: "Banner Design", quantity: 1, price: 156.0, total: 156.0 },
      { id: 2, name: "Email Design", quantity: 2, price: 200.0, total: 400.0 },
    ],
    total: 556.0,
  },
  {
    id: "XM9141",
    createAt: "2021-09-20",
    paymentDue: "2021-09-30",
    description: "Website Redesign",
    clientName: "Alex Farmer",
    clientEmail: "alex@petrolcompany.com",
    status: "pending",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "106 Kendell Street",
      city: "Sharrington",
      postCode: "NR24 5WR",
      country: "United Kingdom",
    },
    items: [
      {
        id: 3,
        name: "Website Design",
        quantity: 1,
        price: 14002.33,
        total: 14002.33,
      },
    ],
    total: 14002.33,
  },
  {
    id: "RG0314",
    createAt: "2021-09-24",
    paymentDue: "2021-10-01",
    description: "Landing Page UI",
    clientName: "John Smith",
    clientEmail: "john@smith.com",
    status: "draft",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "84 Church Way",
      city: "Carlisle",
      postCode: "CA20 2TG",
      country: "United Kingdom",
    },
    items: [
      {
        id: 4,
        name: "New UI Design",
        quantity: 1,
        price: 6155.91,
        total: 6155.91,
      },
    ],
    total: 6155.91,
  },
];
