import { BaseModelId } from "./base";

export type AnimalType = "cat" | "dog" | "other";

export type Animal = BaseModelId & {
  name: string;
  type: AnimalType;
  age: number;
};

export type AnimalCreate = Omit<Animal, "id">;

export type AnimalPatch = Omit<Animal, "id">;
