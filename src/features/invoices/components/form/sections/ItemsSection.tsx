// useFormContext hook to access parent form
import { useFieldArray, useFormContext } from "react-hook-form";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui";
import type { InvoiceFormType } from "../schema";

const ItemsSection = () => {
  const {
    register,
    control,
    // formState: { errors },
  } = useFormContext<InvoiceFormType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <div className="flex flex-col gap-4">
      <h3>Item List</h3>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="grid grid-cols-5 md:grid-cols-8 items-end justify-end gap-4"
        >
          {/* Name */}
          <Input
            className="col-span-5 md:col-span-3"
            label="Item Name"
            {...register(`items.${index}.name` as const)}
          />

          {/* Qty. */}
          <Input
            className="col-span-1 justify-center"
            label="Qty."
            {...register(`items.${index}.qty` as const)}
          />

          {/* Price */}
          <Input
            className="col-span-2"
            label="Price"
            {...register(`items.${index}.price` as const)}
          />

          {/* Total */}
          <Input
            // className=""
            label="Total"
            {...register(`items.${index}.total` as const)}
            readOnly
            className="col-span-1 border-0 p-0 bg-transparent focus:outline-none"
          />
          {/* <div className="col-span-1 flex flex-col items-center gap-1">
            <label className="text-sm font-medium text-gray-700">Total</label>
            <span className="text-right px-4 py-3">
              {fields[index].total}
            </span>
          </div> */}

          {/* Btuun Delete Item */}
          <Button
            className="col-span-1"
            type="button"
            onClick={() => remove(index)}
          >
            🗑️
          </Button>
        </div>
      ))}

      {/* Add Item */}
      <Button
        type="button"
        onClick={() => append({ name: "", qty: 1, price: 0, total: 0 })}
      >
        Add Item
      </Button>
    </div>
  );
};

export default ItemsSection;
