import { BaseModelId } from "./base";

export type Gender = "female" | "male" | "other";

export type User = BaseModelId & {
  name: string;
  gender: Gender;
  banned: boolean;
};

export type UserCreate = Omit<User, "id">;
