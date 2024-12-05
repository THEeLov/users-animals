import { useUserCreate } from "@/hooks/useUsers";
import { useToast } from "../ui/use-toast";
import { UserCreate } from "@/models/users";
import { toastOnCreate, toastOnError } from "@/utilts";

const CreateUserDialog = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast();

  const { mutateAsync: createCategory } = useUserCreate();

  const handleSubmit = async (values: UserCreate) => {
    try {
      await createCategory(values);
      toast(toastOnCreate(values.name, "User"));
      onClose();
    } catch (e) {
      toast(toastOnError());
      console.error(e);
    }
  };

  return <div>CreateUserDialog</div>;
};

export default CreateUserDialog;
