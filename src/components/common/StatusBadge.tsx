export default function StatusBadge() {
  return (
    <div
      className="
      flex items-center gap-2 px-7 py-3 
      bg-[#33D69F]/5 rounded-md"
    >
      <span className="h-2 w-2 bg-[#33D69F] rounded-full"></span>
      <span className="text-[#33D69F] font-bold">Paid</span>
    </div>
  );
}
