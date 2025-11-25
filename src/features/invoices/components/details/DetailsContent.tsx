import type { Invoice } from "../../types/invoice.types";

type InvoiceProps = {
  invoice: Invoice;
};

const DetailsContent = ({ invoice }: InvoiceProps) => {
  return (
    <div className="flex-col bg-bgAlt rounded-lg p-6 mt-4">
      <div
        className="
          flex flex-col items-start gap-7 mb-8
          md:flex-row md:justify-between md:mb-5"
      >
        <div>
          <p>
            <span>#</span>XM9141
          </p>
          <p>Graphic Design</p>
        </div>
        <div
          className="
            flex flex-col items-start md:items-end "
        >
          <p>19 Union Terrace</p>
          <p>London</p>
          <p>E1 3EZ</p>
          <p>United Kingdom</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-11">
        <div>
          <div>
            <p>Invoice Date</p>
            <strong>21 Aug 2021</strong>
          </div>
          <div>
            <p>Payment Due</p>
            <strong>20 Sep 2021</strong>
          </div>
        </div>
        <div>
          <div>
            <p>Bill To</p>
            <strong>Alex Grim</strong>
          </div>
          <div>
            <p>84 Church Way</p>
            <p>Bradford </p>
            <p>BD1 9PB</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div>
          <p>Sent to</p>
          <strong>alexgrim@mail.com</strong>
        </div>
      </div>
      <div className="p-6 bg-bgTable rounded-t-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Item Name</th>
              <th>QTY.</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-center">{item.price}</td>
                <td className="text-center">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="
          flex items-center justify-between 
          p-6 md:px-8 md:py-6 bg-bgTotal rounded-b-lg"
      >
        <p>Amount Due</p>
        <p>£ 556.00</p>
      </div>
    </div>
  );
};

export default DetailsContent;
