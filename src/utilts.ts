import { type Toast } from "./components/ui/use-toast";

export const toastOnCreate = (title: string, name: string): Toast => ({
  title: `${name} created`,
  description: `${name} ${title} was created on server!`,
});

export const toastOnPatch = (title: string, name: string): Toast => ({
  title: `${name} created`,
  description: `${name} ${title} was updated on server!`,
});

export const toastOnDelete = (title: string, name: string): Toast => ({
  title: `${name} deleted`,
  description: `${name} ${title} was deleted on server!`,
});

export const toastOnBan = (name: string): Toast => ({
  title: "User banned",
  description: `User ${name} was banned!`,
});

export const toastOnError = (): Toast => ({
  variant: "destructive",
  title: "Oppps, something went wrong!",
});
