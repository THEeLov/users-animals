import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  gender: z.enum(["male", "female", "other"]),
  banned: z.boolean(),
});

export type UserSchemaType = z.infer<typeof UserSchema>;

export const AnimalSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.enum(["dog", "cat", "other"]),
  age: z.coerce.number().min(0, "Age has to be at least 0"),
});

export type AnimalSchemaType = z.infer<typeof AnimalSchema>;
