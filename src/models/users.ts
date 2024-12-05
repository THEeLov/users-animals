import { BaseModelId } from "./base";

export type Gender = "female" | "male" | "other";

export type User = BaseModelId & {
  name: string;
  gender: Gender;
  banned: boolean;
};

export type UserCreate = Omit<User, "id">;

export type UserPatch = Omit<User, "id">

export type UserBan = Omit<UserPatch, "name" | "gender">