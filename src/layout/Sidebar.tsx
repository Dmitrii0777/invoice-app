export default function Sidebar() {
  return (
    <aside
      className="
      fixed top-0 left-0 z-50 
      w-full lg:w-[103px] lg:h-screen  
      lg:rounded-r-[20px] bg-[#1E2139]"
    >
      <div
        className="
        flex items-center justify-between
        md:h-[80px] h-[72px] lg:h-full 
        lg:flex-col"
      >
        <div
          className="
          w-[72px] h-[72px] 
          md:w-[80px] md:h-[80px] 
          lg:w-[103px] lg:h-[103px] 
          bg-purple-600 rounded-r-[20px]"
        ></div>

        <div
          className="
          flex items-center gap-6 
          h-full lg:w-full lg:h-auto 
          lg:flex-col lg:mt-auto"
        >
          <button className="text-gray-400 hover:text-white">Click</button>

          <div
            className="
            h-full w-px
            lg:w-full lg:h-px 
            bg-[#494E6E]"
          />
          <div
            className="
            w-10 h-10 rounded-full 
            bg-gray-600 lg:mb-6 lg:mr-0 mr-6"
          ></div>
        </div>
      </div>
    </aside>
  );
}
