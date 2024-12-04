import { FC } from "react";
import { Button, ButtonProps } from "./button";
import { IoBanOutline } from "react-icons/io5";

const BanButton: FC<ButtonProps> = (props) => {
  return (
    <Button variant="ghost" className="flex h-8 w-8 p-0" {...props}>
      <IoBanOutline className="h-4 w-4" />
    </Button>
  );
};

export default BanButton;