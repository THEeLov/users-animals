import { useUser, useUserPatch } from "@/hooks/useUsers";
import { useToast } from "../ui/use-toast";
import { toastOnError, toastOnPatch } from "@/utilts";
import { UserPatch } from "@/models/users";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import UserForm from "../forms/UserForm";
import { useMemo } from "react";
import ContentLoading from "../ui/ContentLoading";

const EditUserDialog = ({
  userId,
  onClose,
}: {
  userId: string;
  onClose: () => void;
}) => {
  const { toast } = useToast();

  const { mutateAsync: patchUser } = useUserPatch(userId);
  const { data: user } = useUser(userId);

  const defaultValues = useMemo(() => {
    if (!user) return undefined;
    const { id, ...otherAttrs } = user;
    return otherAttrs;
  }, [user]);

  const handleSubmit = async (values: UserPatch) => {
    try {
      await patchUser(values);
      toast(toastOnPatch(values.name, "User"));
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
          <DialogTitle>Edit user</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        {defaultValues ? (
          <UserForm
            key={userId}
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
          />
        ) : (
          <ContentLoading />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditUserDialog;
