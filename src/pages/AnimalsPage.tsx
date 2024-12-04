import AnimalsTable from "@/components/AnimalsTable";
import AnimalTableLoader from "@/components/AnimalTableLoader";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/ui/PageTitle";
import { useAnimals } from "@/hooks/useAnimals";
import { useState } from "react";

const AnimalsPage = () => {
  const { data: animals, isFetching } = useAnimals();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = () => setIsCreateDialogOpen(true);
  const handleDialogClose = () => setIsCreateDialogOpen(false);

  return (
    <main className="py-4">
      <section className="flex">
        <PageTitle className="grow">Animals</PageTitle>
        <Button onClick={handleDialogOpen}>Add animal</Button>
      </section>
      {animals && !isFetching ? (
        <AnimalsTable data={animals} />
      ) : (
        <AnimalTableLoader />
      )}
      {/* {isCreateDialogOpen && (
        <CreateUserDialog onClose={handleDialogClose} />
      )} */}
    </main>
  );
};

export default AnimalsPage;
