import type { Invoice } from "../../types/invoice.types";

type InvoiceProps = {
  invoice: Invoice;
};

const DetailsContent = ({ invoice }: InvoiceProps) => {
  return (
    <div className="flex-col bg-bgAlt rounded-lg p-6">
      <div
        className="
          flex flex-col items-start gap-7 mb-8
          md:flex-row md:justify-between md:mb-5"
      >
        <div className="flex flex-col gap-2 ">
          <p className="font-bold text-headingSVar md:text-headingS text-textPrimary">
            <span className="text-blueGray-300">#</span>
            XM9141
          </p>
          <p className="text-textSecondary text-bodyVar">Graphic Design</p>
        </div>
        <div
          className="
            flex flex-col items-start md:items-end gap-1 text-textSecondary"
        >
          <p>19 Union Terrace</p>
          <p>London</p>
          <p>E1 3EZ</p>
          <p>United Kingdom</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-9">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-textSecondary text-bodyVar">Invoice Date</p>
            <strong className="text-headingS text-textPrimary">
              21 Aug 2021
            </strong>
          </div>
          <div className="flex flex-col gap-3 text-textSecondary">
            <p>Payment Due</p>
            <strong className="text-headingS text-textPrimary">
              20 Sep 2021
            </strong>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col gap-3">
            <p className="text-textSecondary text-bodyVar">Bill To</p>
            <strong className="text-headingS text-textPrimary">
              Alex Grim
            </strong>
          </div>
          <div className="flex flex-col text-textSecondary">
            <p>84 Church Way</p>
            <p>Bradford </p>
            <p>BD1 9PB</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-textSecondary text-bodyVar">Sent to</p>
          <strong className="text-headingS text-textPrimary">
            alexgrim@mail.com
          </strong>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6 bg-bgTable rounded-t-lg">
        <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr] text-textSecondary font-bold">
          <div>Item Name</div>
          <div className="text-center">QTY.</div>
          <div className="text-right">Price</div>
          <div className="text-right">Total</div>
        </div>

        {invoice.items.map((item) => (
          <div
            key={item.name}
            className="
              grid grid-cols-2 w-full gap-y-2
              md:grid-cols-[3fr_1fr_1fr_1fr]"
          >
            {/* NAME */}
            <div className="text-textPrimary text-headingSVar font-bold">
              {item.name}
            </div>

            {/* TOTAL (mobile) */}
            <div
              className="
                md:hidden row-span-2 flex items-center justify-end 
                text-textPrimary text-headingSVar font-bold"
            >
              {item.total}
            </div>

            {/* QTY + PRICE (mobile stacked under name) */}
            <div className="flex gap-4 text-textSecondary font-bold md:hidden">
              <span>{item.quantity} x</span>
              <span>£{item.price}</span>
            </div>

            {/* DESKTOP VERSION */}
            <div className="hidden md:block text-textSecondary font-bold text-center">
              {item.quantity}
            </div>

            <div className="hidden md:block text-textSecondary font-bold text-right">
              {item.price}
            </div>

            <div className="hidden md:block text-textPrimary font-bold text-right">
              {item.total}
            </div>
          </div>
        ))}
      </div>

      <div
        className="
          flex items-center justify-between 
          p-6 md:px-8 md:py-6 bg-bgTotal rounded-b-lg"
      >
        <p className="text-white">Amount Due</p>
        <p className="text-white text-headingMVar font-bold">£ 556.00</p>
      </div>
    </div>
  );
};

export default DetailsContent;
