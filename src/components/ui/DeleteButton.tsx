import { FC } from "react";
import { Button, ButtonProps } from "./button";
import { MdOutlineDelete } from "react-icons/md";

const DeleteButton: FC<ButtonProps> = (props) => {
  return (
    <Button variant="ghost" className="flex h-8 w-8 p-0" {...props}>
      <MdOutlineDelete className="h-4 w-4" />
    </Button>
  );
};

export default DeleteButton;