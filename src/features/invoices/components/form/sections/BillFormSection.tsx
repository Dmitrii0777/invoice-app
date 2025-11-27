// useFormContext hook to access parent form
import { useFormContext } from "react-hook-form";

// Invoice form types
import type { InvoiceFormType } from "../schema";
import Input from "@/components/ui/Input";

const BillFormSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InvoiceFormType>();

  return (
    <div>
      <h3>Bill Form</h3>
      <div className="grid grid-cols-2 gap-4  lg:grid-cols-3">
        {/* Street Address */}
        <Input
          label="Street Address"
          className="col-span-2 lg:col-span-3"
          {...register("billForm.street")}
          error={errors.billForm?.street?.message}
        />

        {/* City */}
        <Input
          label="City"
          className="col-span-1"
          {...register("billForm.city")}
          error={errors.billForm?.city?.message}
        />

        {/* Post Code */}
        <Input
          label="Post Code"
          className="col-span-1"
          {...register("billForm.postCode")}
          error={errors.billForm?.postCode?.message}
        />

        {/* Country */}
        <Input
          label="Country"
          className="col-span-2 lg:col-span-1"
          {...register("billForm.country")}
          error={errors.billForm?.country?.message}
        />
      </div>
    </div>
  );
};

export default BillFormSection;
