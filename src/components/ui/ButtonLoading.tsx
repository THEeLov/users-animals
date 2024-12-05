import { IoReload } from "react-icons/io5";
import { Button } from "./button";

export function ButtonLoading() {
  return (
    <Button disabled>
      <IoReload className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}