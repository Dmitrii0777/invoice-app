// React Hook Form
import { FormProvider } from "react-hook-form";

// Custom hooks
import { useInvoiceForm } from "./hooks/useInvoiceForm";

// Form sections
import BillFormSection from "./sections/BillFormSection";
import BillToSection from "./sections/BillToSection";

// UI components
import { Button } from "@/components/ui";
import { Container } from "@/layout";

// Types
import type { InvoiceFormType } from "./schema";
import PaymentTermsSection from "./sections/PaymentTermsSection";

const InvoiceForm = () => {
  const methods = useInvoiceForm();

  const onSubmit = (data: InvoiceFormType) => {
    console.log("FORM DATA:", data);
  };

  return (
    <div className="lg:ml-[103px] w-full h-full pt-24 sm:pt-32 lg:pt-16">
      <Container size="small" className="h-full">
        <FormProvider {...methods}>
          <h2 className="mb-12 text-textPrimary text-headingMVar font-bold">
            Edit <span className="text-blueGray-300">#</span>XM9141
          </h2>
          <form
            className="flex flex-col h-full overflow-y-auto gap-12"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            {/* Bill form */}
            <BillFormSection />

            {/* Bill To */}
            <BillToSection />

            {/* Payment Terms Date*/}
            <PaymentTermsSection />

            <Button type="submit">Submit</Button>
          </form>
        </FormProvider>
      </Container>
    </div>
  );
};

export default InvoiceForm;
