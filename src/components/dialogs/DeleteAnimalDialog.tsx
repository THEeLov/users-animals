import { useAnimal, useAnimalDelete } from "@/hooks/useAnimals";
import { useToast } from "../ui/use-toast";
import { toastOnDelete, toastOnError } from "@/utilts";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog";
import { Button } from "../ui/button";

const DeleteAnimalDialog = ({
  animalId,
  onClose,
}: {
  animalId: string;
  onClose: () => void;
}) => {
  const { toast } = useToast();

  const { data: animal } = useAnimal(animalId);
  const { mutateAsync: deleteAnimal, isPending } = useAnimalDelete(animalId);

  const handleDelete = async () => {
    try {
      await deleteAnimal();
      toast(toastOnDelete(animal?.name || "", "Animal"));
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
            This action cannot be undone. This will permanently delete animal.
          </AlertDialogDescription>
          <AlertDialogDescription className="font-semibold">
            Animal: {animal?.name}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
          >
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAnimalDialog;
