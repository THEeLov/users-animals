import { useToast, type Toast } from "./components/ui/use-toast";

export const toastOnCreate = (title: string, name: string): Toast => ({
  title: `${name} created`,
  description: `${name} ${title} was created on server!`,
});

export const toastOnDelete = (title: string, name: string): Toast => ({
  title: `${name} deleted`,
  description: `${name} ${title} was deleted on server!`
});

export const toastOnError = (): Toast => ({
  variant: "destructive",
  title: "Oppps, something went wrong!",
});