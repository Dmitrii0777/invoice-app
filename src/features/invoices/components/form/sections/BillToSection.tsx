// useFormContext hook to access parent form
import { useFormContext } from "react-hook-form";

// Local components
import Input from "@/components/ui/Input";

// Invoice form types
import type { InvoiceFormType } from "../schema";

const BillToSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InvoiceFormType>();
  return (
    <div>
      <h3>Bill To</h3>
      <div className="grid grid-col-2 gap-6 lg:grid-col-3">
        {/* Client Name*/}
        <Input
          className="col-span-2 lg:col-span-3"
          label="Client’s Name"
          {...register("billTo.clientName")}
          error={errors.billTo?.clientName?.message}
        />

        {/* Client Email */}
        <Input
          className="col-span-2 lg:col-span-3"
          label="Client’s Email"
          {...register("billTo.clientEmail")}
          error={errors.billTo?.clientEmail?.message}
        />

        {/* Street */}
        <Input
          className="col-span-2 lg:col-span-3"
          label="Street Address"
          {...register("billTo.streetAddress")}
          error={errors.billTo?.streetAddress?.message}
        />

        {/* City */}
        <Input
          className="col-span-1"
          label="City"
          {...register("billTo.city")}
          error={errors.billTo?.city?.message}
        />

        {/* Post Code */}
        <Input
          className="col-span-1"
          label="Post Code"
          {...register("billTo.postCode")}
          error={errors.billTo?.postCode?.message}
        />

        {/* Country */}
        <Input
          className="col-span-2 lg:col-span-1"
          label="Country"
          {...register("billTo.country")}
          error={errors.billTo?.country?.message}
        />
      </div>
    </div>
  );
};

export default BillToSection;
