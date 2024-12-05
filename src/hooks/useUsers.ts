import { UserBan, UserCreate, UserPatch } from "../models/users";
import UserApi from "../api/usersApi";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => UserApi.getSingle(id),
  });
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => UserApi.getAll(),
  });
};

export const useUserCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: UserCreate) => UserApi.createSingle(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useUserPatch = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: UserPatch) => UserApi.patchSingle(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useUserBan = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: UserBan) => UserApi.banSingle(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export const useUserDelete = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => UserApi.deleteSingle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
