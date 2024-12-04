import { FC } from "react";
import { Button, ButtonProps } from "./button";
import { CiEdit } from "react-icons/ci";

const EditButton: FC<ButtonProps> = (props) => {
  return (
    <Button variant="ghost" className="flex h-8 w-8 p-0" {...props}>
      <CiEdit className="h-4 w-4" />
    </Button>
  );
};

export default EditButton;