import { useAnimalCreate } from "@/hooks/useAnimals";
import { AnimalCreate } from "@/models/animals";
import { toastOnCreate, toastOnError } from "@/utilts";
import AnimalForm from "../forms/AnimalForm";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { useToast } from "../ui/use-toast";

const CreateAnimalDialog = ({onClose} : {onClose: () => void}) => {
  const { toast } = useToast();

  const { mutateAsync: createAnimal } = useAnimalCreate();

  const handleSubmit = async (values: AnimalCreate) => {
    try {
      await createAnimal(values);
      toast(toastOnCreate(values.name, "Animal"));
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
          <DialogTitle>Create new Animal</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        <AnimalForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}

export default CreateAnimalDialog