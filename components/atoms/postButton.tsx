import { Dispatch, FC } from "react";
import { BsPlusLg } from "react-icons/bs";

type Props = {
  setShowNewPostModal: Dispatch<React.SetStateAction<boolean>>;
};

export const PostButton: FC<Props> = (props: Props) => {
  return (
    <button
      onClick={() => {
        props.setShowNewPostModal(true);
      }}
      className="rounded-full h-8 w-8 bg-[#003AD0] absolute bottom-10 right-20 mr-10 items-center flex justify-center"
    >
      <BsPlusLg className="h-6 w-9" />
    </button>
  );
};