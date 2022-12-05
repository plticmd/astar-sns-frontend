import { FC } from "react";

type Props = {
  balance: string;
};

export const Balance: FC<Props> = (props: Props) => {
  return <div className="text-xs ">{props.balance}＊Doge</div>;
};
