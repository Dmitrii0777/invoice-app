// React Hook Form
import { FormProvider } from "react-hook-form";

// Custom hooks
import { useInvoiceForm } from "./hooks/useInvoiceForm";

// Form sections
import BillFormSection from "./sections/BillFormSection";

// UI components
import { Button } from "@/components/ui";
import { Container } from "@/layout";

// Types
import type { InvoiceFormType } from "./schema";

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
