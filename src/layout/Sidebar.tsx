import Button from "@/components/ui/Button";
import SunIcon from "@/components/ui/SunIcon";
import Logo from "@/components/ui/logo/Logo";
import MoonIcon from "@/components/ui/MoonIcon";

import avatar from "@/assets/images/avatar.jpg";

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
        <Logo />
        <div
          className="
          flex items-center gap-6 
          h-full lg:w-full lg:h-auto 
          lg:flex-col lg:mt-auto"
        >
          <Button className="px-0 md:px-5">
            <SunIcon className="w-6 h-6 text-yellow-400 hidden" />
            <MoonIcon className="md:h-6 md:w-6" />
          </Button>
          <div
            className="
            h-full w-px
            lg:w-full lg:h-px 
            bg-[#494E6E]"
          />
          <div
            className=" 
              h-7 w-7 lg:h-10 lg:w-10
              rounded-full overflow-hidden
            bg-gray-600 lg:mb-6 lg:mr-0 mr-6"
          >
            <img className="" src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </aside>
  );
}
