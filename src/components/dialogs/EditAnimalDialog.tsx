import { useAnimal, useAnimalPatch } from "@/hooks/useAnimals";
import { useToast } from "../ui/use-toast";
import { useMemo } from "react";
import { AnimalPatch } from "@/models/animals";
import { toastOnError, toastOnPatch } from "@/utilts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import ContentLoading from "../ui/ContentLoading";
import AnimalForm from "../forms/AnimalForm";

const EditAnimalDialog = ({
  animalId,
  onClose,
}: {
  animalId: string;
  onClose: () => void;
}) => {
  const { toast } = useToast();

  const { mutateAsync: patchAnimal } = useAnimalPatch(animalId);
  const { data: animal } = useAnimal(animalId);

  const defaultValues = useMemo(() => {
    if (!animal) return undefined;
    const { id, ...otherAttrs } = animal;
    return otherAttrs;
  }, [animal]);

  const handleSubmit = async (values: AnimalPatch) => {
    try {
      await patchAnimal(values);
      toast(toastOnPatch(values.name, "Animal"));
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
          <DialogTitle>Edit Animal</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        {defaultValues ? (
          <AnimalForm
            key={animalId}
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

export default EditAnimalDialog;
