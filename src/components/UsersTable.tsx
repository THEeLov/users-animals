import { User } from "@/models/users";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import EditButton from "./ui/EditButton";
import DeleteButton from "./ui/DeleteButton";
import { IoIosMale } from "react-icons/io";
import { IoFemaleOutline } from "react-icons/io5";
import { IoMaleFemaleOutline } from "react-icons/io5";
import BanButton from "./ui/BanButon";
import DeleteUserDialog from "./dialogs/DeleteUserDialog";
import EditUserDialog from "./dialogs/EditUserDialog";

const UsersTable = ({ data }: { data: User[] }) => {
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const handleUserEdit = (id: string) => setEditingUserId(id);
  const handleCloseEditDialog = () => setEditingUserId(null);

  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);
  const handleUserDelete = (id: string) => setDeletingUserId(id);
  const handleCloseDeleteDialog = () => setDeletingUserId(null);

  const [banningUserId, setBanningUserId] = useState<string | null>(null);
  const handleUserBan = (id: string) => setBanningUserId(id);
  const handleCloseBanDialog = () => setBanningUserId(null);

  return (
    <Table>
      <TableHeader>
        <TableRow className="flex-grow grid grid-cols-[1.5fr_1fr_1fr_1fr]">
          <TableHead className="flex items-center">Name</TableHead>
          <TableHead className="flex items-center">Gender</TableHead>
          <TableHead className="flex items-center">Banned</TableHead>
          <TableHead className="flex items-center justify-end">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow
            key={user.id}
            className="grid grid-cols-[1.5fr_1fr_1fr_1fr]"
          >
            <TableCell className="flex items-center overflow-hidden">
              <span className={`truncate ${user.banned ? "text-red-500" : ""}`}>
                {user.name}
              </span>
            </TableCell>
            <TableCell className="flex items-center">
              {user.gender === "male" ? (
                <IoIosMale />
              ) : user.gender === "female" ? (
                <IoFemaleOutline />
              ) : (
                <IoMaleFemaleOutline />
              )}
            </TableCell>
            <TableCell className="flex items-center">
              {user.banned ? "YES" : "NO"}
            </TableCell>
            <TableCell className="flex items-center justify-end space-x-2">
              <EditButton onClick={() => handleUserEdit(user.id)} />
              <DeleteButton onClick={() => handleUserDelete(user.id)} />
              <BanButton onClick={() => handleUserBan(user.id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {editingUserId !== null && (
        <EditUserDialog
          userId={editingUserId}
          onClose={handleCloseEditDialog}
        />
      )}
      {deletingUserId !== null && (
        <DeleteUserDialog
          userId={deletingUserId}
          onClose={handleCloseDeleteDialog}
        />
      )}
      {/* 
      )}
      {banningUserId !== null && (
        <BanUserDialog
          userId={deletingUserId}
          onClose={handleCloseBanDialog}
        />
      )} */}
    </Table>
  );
};

export default UsersTable;
