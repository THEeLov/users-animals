import { useMemo, useState } from "react";
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
import EditAnimalDialog from "./dialogs/EditAnimalDialog";
import { TableFilter } from "./ui/TableFilter";

const AnimalsTable = ({ data }: { data: Animal[] }) => {
  const [editingAnimalId, setEditingAnimalId] = useState<string | null>(null);
  const handleAnimalEdit = (id: string) => setEditingAnimalId(id);
  const handleCloseEditDialog = () => setEditingAnimalId(null);

  const [deletingAnimalId, setDeletingAnimalId] = useState<string | null>(null);
  const handleAnimalDelete = (id: string) => setDeletingAnimalId(id);
  const handleCloseDeleteDialog = () => setDeletingAnimalId(null);

  const [nameFilter, setNameFilter] = useState<string>("");
  const filteredData = useMemo(() => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }, [data, nameFilter]);

  return (
    <Table>
      <TableHeader>
        <TableRow className="flex-grow grid grid-cols-[1.5fr_1fr_1fr_1fr]">
          <TableHead className="flex flex-col justify-center h-auto gap-2">
            <span className="mr-2">Name</span>
            <TableFilter
              value={nameFilter}
              onChange={setNameFilter}
              placeholder="Filter names..."
              ariaLabel="names"
            />
          </TableHead>
          <TableHead className="flex items-center">Type</TableHead>
          <TableHead className="flex items-center">Age</TableHead>
          <TableHead className="flex items-center justify-end">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData.map((animal) => (
          <TableRow
            key={animal.id}
            className="grid grid-cols-[1.5fr_1fr_1fr_1fr]"
          >
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
      {editingAnimalId !== null && (
        <EditAnimalDialog
          animalId={editingAnimalId}
          onClose={handleCloseEditDialog}
        />
      )}
    </Table>
  );
};

export default AnimalsTable;
