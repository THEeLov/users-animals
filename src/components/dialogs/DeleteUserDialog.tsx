import { useUser, useUserDelete } from "@/hooks/useUsers";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { useToast } from "../ui/use-toast";
import { toastOnDelete, toastOnError } from "@/utilts";
import { Button } from "../ui/button";

const DeleteUserDialog = ({
  onClose,
  userId,
}: {
  onClose: () => void;
  userId: string;
}) => {
  const { toast } = useToast();

  const { data: user } = useUser(userId);
  const { mutateAsync: deleteUser, isPending } = useUserDelete(userId);

  const handleDelete = async () => {
    try {
      await deleteUser();
      toast(toastOnDelete(user?.name || "", "User"));
      onClose();
    } catch (e) {
      toast(toastOnError());
      console.error(e);
    }
  };

  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete user.
          </AlertDialogDescription>
          <AlertDialogDescription className="font-semibold">
            User: {user?.name}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteUserDialog;
