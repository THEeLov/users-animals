import axios from "axios";

import { Animal, AnimalCreate, AnimalPatch } from "../models/animals";

const axiosInstance = axios.create({
  baseURL: "https://inqool-interview-api.vercel.app/api/animals",
});

const getSingle = async (animalId: string): Promise<Animal> => {
  const resp = await axiosInstance.get(`${animalId}`);
  return resp.data;
};

const getAll = async (): Promise<Animal[]> => {
  const resp = await axiosInstance.get("");
  return resp.data;
};

const createSingle = async (animalData: AnimalCreate): Promise<Animal> => {
  const resp = await axiosInstance.post("", animalData);
  return resp.data;
};

const patchSingle = async (
  animalId: string,
  animalData: AnimalPatch
): Promise<Animal> => {
  const resp = await axiosInstance.patch(`${animalId}`, animalData);
  return resp.data;
};

const deleteSingle = async (animalId: string): Promise<void> => {
  const resp = await axiosInstance.delete(`${animalId}`);
  return resp.data;
};

export const AnimalApi = {
  getSingle,
  getAll,
  createSingle,
  patchSingle,
  deleteSingle
};

export default AnimalApi;