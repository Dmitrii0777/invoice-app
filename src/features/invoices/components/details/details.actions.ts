import type { Variant } from "../../../../components/ui/types/button.types";

interface IButton {
  text: string;
  variant: Variant;
  textClass: string;
}

export const buttons: IButton[] = [
  { text: "Edit", variant: "bg-accent", textClass: "text-text-accent" },
  { text: "Delete", variant: "bg-danger", textClass: "text-white" },
  { text: "Mark as Paid", variant: "bg-primary", textClass: "text-white" },
];
