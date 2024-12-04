import axios from "axios";

import { Animal, AnimalCreate, AnimalPatch } from "../models/animals";

const axiosInstance = axios.create({
  baseURL: "https://inqool-interview-api.vercel.app/api/animals",
});

export const getSingle = async (animalId: string): Promise<Animal> => {
  const resp = await axiosInstance.get(`${animalId}`);
  return resp.data;
};

export const getAll = async (): Promise<Animal[]> => {
  const resp = await axiosInstance.get("");
  return resp.data;
};

export const createSingle = async (animalData: AnimalCreate): Promise<Animal> => {
  const resp = await axiosInstance.post("", animalData);
  return resp.data;
};

export const patchSingle = async (
  animalId: string,
  animalData: AnimalPatch
): Promise<Animal> => {
  const resp = await axiosInstance.patch(`${animalId}`, animalData);
  return resp.data;
};
