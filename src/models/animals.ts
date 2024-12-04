import { BaseModelId } from "./base";

export type AnimalType = "cat" | "dog" | "other";

export type Animal = BaseModelId & {
  name: string;
  type: AnimalType;
  age: number;
};

export type AnimalCreate = Omit<Animal, "id">;

// In this scenario user in only able to change the name of the animal maybe change later
export type AnimalPatch = Omit<Animal, "id" | "type" | "age">;
