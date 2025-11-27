// useFormContext hook to access parent form
import { useFormContext } from "react-hook-form";

// Local components
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import DatePicker from "@/components/ui/DatePicker";

// Invoice form types
import type { InvoiceFormType } from "../schema";

const PaymentTermsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InvoiceFormType>();

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Invoice Date */}
      <DatePicker
        type="date"
        className="col-span-1"
        label="Invoice Date"
        {...register("paymentInfo.invoiceDate")}
        error={errors.paymentInfo?.invoiceDate?.message}
      />

      {/* Payment Terms */}
      <Select
        className="col-span-1"
        label="Payment Terms"
        {...register("paymentInfo.paymentTerm")}
        error={errors.paymentInfo?.paymentTerm?.message}
      >
        <option>Net 1 Day</option>
        <option>Net 7 Days</option>
        <option>Net 14 Days</option>
        <option>Net 30 Days</option>
      </Select>

      {/* Project Description */}
      <Input
        className="col-span-2"
        label="Project Description"
        {...register("paymentInfo.projectDescription")}
        error={errors.paymentInfo?.projectDescription?.message}
      />
    </div>
  );
};

export default PaymentTermsSection;
