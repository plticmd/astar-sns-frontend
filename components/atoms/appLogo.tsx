import Image from "next/image";
import type { FC } from "react";

const AppLogo: FC = () => {
  return (
    <div className="flex-row flex items-center ml-[5px]">
      <Image
        className="w-[30px] h-[30px]"
        src="/unchain_logo.png"
        alt="unchain_logo"
        width={30}
        height={30}
      />
      <Image
        className="w-[20px] h-[15px]"
        src="/cross_mark_2_logo-removebg.png"
        alt="cross_logo"
        width={30}
        height={30}
      />
      <Image
        className="w-[30px] h-[30px]"
        src="/Astar_logo.png"
        alt="astar_logo"
        width={30}
        height={30}
      />
    </div>
  );
};

export default AppLogo;