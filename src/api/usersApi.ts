import axios from "axios";

import { User, UserCreate, UserPatch } from "../models/users";

const axiosInstance = axios.create({
  baseURL: "https://inqool-interview-api.vercel.app/api/users",
});

export const getSingle = async (userId: string): Promise<User> => {
  const resp = await axiosInstance.get(`${userId}`);
  return resp.data;
};

export const getAll = async (): Promise<User[]> => {
  const resp = await axiosInstance.get("");
  return resp.data;
};

export const createSingle = async (userData: UserCreate): Promise<User> => {
  const resp = await axiosInstance.post("", userData);
  return resp.data;
};

export const patchSingle = async (
  userId: string,
  userData: UserPatch
): Promise<User> => {
  const resp = await axiosInstance.patch(`${userId}`, userData);
  return resp.data;
};
