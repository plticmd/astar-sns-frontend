import { useRouter } from "next/router";
import { FC } from "react";

const DisconnectButton: FC = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
      className="z-10 text-l text-white items-center flex  h-7 bg-[#003AD0] hover:bg-blue-700  py-1 px-3 rounded-full mr-4"
    >
      Disconnect Wallet
    </button>
  );
};

export default DisconnectButton;