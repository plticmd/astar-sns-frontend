import { Dispatch, FC } from "react";

type Props = {
  afterOpenFn: Dispatch<React.SetStateAction<boolean>>;
};

export const CloseButton: FC<Props> = (props: Props) => {
  return (
    <button
      onClick={() => props.afterOpenFn(false)}
      className="rounded-l h-7 w-10 bg-[#003AD0] text-white"
    >
      Close
    </button>


  );
};