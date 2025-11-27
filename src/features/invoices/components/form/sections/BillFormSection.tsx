// useFormContext hook to access parent form
import { useFormContext } from "react-hook-form";

// Invoice form types
import type { InvoiceFormType } from "../schema";

const BillFormSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<InvoiceFormType>();

  return (
    <div>
      <h3>Bill Form</h3>
      <div>
        <label>Street Address</label>
        <input {...register("billForm.street")} />
        {errors.billForm?.street && <p>{errors.billForm?.street.message}</p>}
      </div>
    </div>
  );
};

export default BillFormSection;
