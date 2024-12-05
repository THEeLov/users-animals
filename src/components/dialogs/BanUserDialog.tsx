import { useUser, useUserBan } from "@/hooks/useUsers";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { toastOnBan, toastOnError } from "@/utilts";
import ContentLoading from "../ui/ContentLoading";

const BanUserDialog = ({
  userId,
  onClose,
}: {
  userId: string;
  onClose: () => void;
}) => {
  const { toast } = useToast();

  const { data: user, isLoading } = useUser(userId);
  const { mutateAsync: banUser, isPending } = useUserBan(userId);

  const handleBan = async () => {
    try {
      await banUser({ banned: true });
      toast(toastOnBan(user?.name || ""));
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
            This action will ban user.
          </AlertDialogDescription>
          <AlertDialogDescription className="font-semibold">
            User: {user?.name}
          </AlertDialogDescription>
        </AlertDialogHeader>
        {isLoading ? (
          <ContentLoading />
        ) : (
          <>
            {" "}
            <AlertDialogFooter>
              {user?.banned ? (
                <Button variant="destructive"> User is already banned</Button>
              ) : (
                <>
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleBan}
                    disabled={isPending}
                  >
                    Continue
                  </Button>
                </>
              )}
            </AlertDialogFooter>
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BanUserDialog;
