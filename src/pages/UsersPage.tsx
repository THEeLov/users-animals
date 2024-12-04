import { Button } from "@/components/ui/button";
import PageTitle from "@/components/ui/PageTitle";
import UsersTable from "@/components/UsersTable";
import UserTableLoader from "@/components/UserTableLoader";
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
        <UserTableLoader />
      )}
      {/* {isCreateDialogOpen && (
        <CreateUserDialog onClose={handleDialogClose} />
      )} */}
    </main>
  );
};

export default UsersPage;
