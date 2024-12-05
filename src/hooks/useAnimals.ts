import { AnimalCreate, AnimalPatch } from "../models/animals";
import AnimalApi from "../api/animalsApi";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useAnimal = (id: string) => {
  return useQuery({
    queryKey: ["animal", id],
    queryFn: () => AnimalApi.getSingle(id),
  });
};

export const useAnimals = () => {
  return useQuery({
    queryKey: ["animals"],
    queryFn: () => AnimalApi.getAll(),
  });
};

export const useAnimalCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: AnimalCreate) => AnimalApi.createSingle(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["animals"] });
    },
  });
};

export const useAnimalPatch = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: AnimalPatch) => AnimalApi.patchSingle(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["animals"] });
    },
  });
};

export const useAnimalDelete = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => AnimalApi.deleteSingle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["animals"] });
    },
  });
};
