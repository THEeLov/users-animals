import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Animal } from "@/models/animals";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import EditButton from "./ui/EditButton";
import DeleteButton from "./ui/DeleteButton";
import DeleteAnimalDialog from "./dialogs/DeleteAnimalDialog";

const AnimalsTable = ({ data }: { data: Animal[] }) => {
  const [editingAnimalId, setEditingAnimalId] = useState<string | null>(null);
  const handleAnimalEdit = (id: string) => setEditingAnimalId(id);
  const handleCloseEditDialog = () => setEditingAnimalId(null);

  const [deletingAnimalId, setDeletingAnimalId] = useState<string | null>(null);
  const handleAnimalDelete = (id: string) => setDeletingAnimalId(id);
  const handleCloseDeleteDialog = () => setDeletingAnimalId(null);

  const [banningAnimalId, setBanningAnimalId] = useState<string | null>(null);
  const handleAnimalBan = (id: string) => setBanningAnimalId(id);
  const handleCloseBanDialog = () => setBanningAnimalId(null);

  return (
    <Table>
      <TableHeader>
        <TableRow className="flex-grow grid grid-cols-4">
          <TableHead className="flex items-center">Name</TableHead>
          <TableHead className="flex items-center">Type</TableHead>
          <TableHead className="flex items-center">Age</TableHead>
          <TableHead className="flex items-center justify-end">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((animal) => (
          <TableRow key={animal.id} className="grid grid-cols-4">
            <TableCell className="flex items-center">
              <span className="truncate">{animal.name}</span>
            </TableCell>
            <TableCell className="flex items-center">
              {animal.type === "dog" ? (
                <FaDog />
              ) : animal.type === "cat" ? (
                <FaCat />
              ) : (
                <FaQuestion />
              )}
            </TableCell>
            <TableCell className="flex items-center">
              <span className="truncate">{animal.age}</span>
            </TableCell>
            <TableCell className="flex items-center justify-end space-x-2">
              <EditButton onClick={() => handleAnimalEdit(animal.id)} />
              <DeleteButton onClick={() => handleAnimalDelete(animal.id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {deletingAnimalId !== null && (
        <DeleteAnimalDialog
          animalId={deletingAnimalId}
          onClose={handleCloseDeleteDialog}
        />
      )}
      {/* {editingAnimalId !== null && (
        <EditAnimalDialog
          AnimalId={editingAnimalId}
          onClose={handleCloseEditDialog}
        />
      )}
      {banningAnimalId !== null && (
        <BanAnimalDialog
          AnimalId={deletingAnimalId}
          onClose={handleCloseBanDialog}
        />
      )} */}
    </Table>
  );
};

export default AnimalsTable;
