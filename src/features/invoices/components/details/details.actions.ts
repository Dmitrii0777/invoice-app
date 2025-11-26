import type { Variant } from "@/components/ui/Button";

interface IButton {
  text: string;
  variant: Variant;
  textClass: string;
}

export const buttons: IButton[] = [
  { text: "Edit", variant: "bg-btnAccentBg", textClass: "text-textSecondary" },
  { text: "Delete", variant: "bg-btnDanger", textClass: "text-white" },
  { text: "Mark as Paid", variant: "bg-bgPrimary", textClass: "text-white" },
];
