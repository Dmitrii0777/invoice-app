import InvoiceIcon from "./InvoiceIcon";

function Logo() {
  return (
    <div
      className="
          relative w-[72px] h-[72px] 
          md:w-[80px] md:h-[80px] 
          lg:w-[103px] lg:h-[103px] 
          rounded-r-[20px] overflow-hidden"
    >
      <div
        className="
        absolute top-0 left-0 
        h-full w-full bg-primary"
      ></div>
      <div
        className="
        absolute rigth-0 bottom-0 
        h-1/2 w-full bg-logo-purple 
        rounded-tl-[20px]"
      ></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <InvoiceIcon className="h-7 w-7 md:h-8 md-w-8 lg:w-10 lg:h-10" />
      </div>
    </div>
  );
}

export default Logo;
