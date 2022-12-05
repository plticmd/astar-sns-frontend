import Image from "next/image";
import type { FC } from "react";

type Props = {
  imgUrl: string;
};

export const BiggerProfileIcon: FC<Props> = (props: Props) => {
  return (
    <Image
      className="rounded-full h-4 w-4 mx-20"
      src={props.imgUrl}
      alt="profile_logo"
      width={30}
      height={30}
      quality={100}
    />
  );
};