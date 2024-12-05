import { useUserCreate } from "@/hooks/useUsers";
import { useToast } from "../ui/use-toast";
import { UserCreate } from "@/models/users";
import { toastOnCreate, toastOnError } from "@/utilts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import UserForm from "../forms/UserForm";

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

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="overflow-auto w-[40rem] h-[30rem] max-h-[80vh] max-w-[80vw]">
        <DialogHeader>
          <DialogTitle>Create new user</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        <UserForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
  
};

export default CreateUserDialog;
