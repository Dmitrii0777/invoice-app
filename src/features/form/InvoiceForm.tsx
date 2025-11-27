import { FormProvider } from "react-hook-form";
import { useInvoiceForm } from "./hooks/useInvoiceForm";
import BillFormSection from "./sections/BillFormSection";
import { Button } from "@/components/ui";
import type { InvoiceFormType } from "./schema";
import { Container } from "@/layout";

const InvoiceForm = () => {
  const methods = useInvoiceForm();

  const onSubmit = (data: InvoiceFormType) => {
    console.log("FORM DATA:", data);
  };

  return (
    <FormProvider {...methods}>
      <Container>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <BillFormSection />

          <Button type="submit" />
        </form>
      </Container>
    </FormProvider>
  );
};

export default InvoiceForm;
