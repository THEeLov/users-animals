import CreateUserDialog from "@/components/dialogs/CreateUserDialog";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/ui/PageTitle";
import UsersTable from "@/components/UsersTable";
import UsersTableLoader from "@/components/UsersTableLoader";
import { useUsers } from "@/hooks/useUsers";
import { useState } from "react";

const UsersPage = () => {
  const { data: users, isFetching } = useUsers();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = () => setIsCreateDialogOpen(true);
  const handleDialogClose = () => setIsCreateDialogOpen(false);

  return (
    <main className="py-4">
      <section className="flex">
        <PageTitle className="grow">Users</PageTitle>
        <Button onClick={handleDialogOpen}>Add user</Button>
      </section>
      {users && !isFetching ? (
        <UsersTable data={users} />
      ) : (
        <UsersTableLoader />
      )}
      {isCreateDialogOpen && (
        <CreateUserDialog onClose={handleDialogClose} />
      )}
    </main>
  );
};

export default UsersPage;
