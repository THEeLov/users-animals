import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AnimalSchema, AnimalSchemaType } from "./validationSchemas/validation";
import { AnimalPatch } from "@/models/animals";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import FormError from "../ui/FormError";
import { Button } from "../ui/button";
import { ButtonLoading } from "../ui/ButtonLoading";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const AnimalForm = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (values: AnimalPatch) => Promise<void>;
  defaultValues?: AnimalSchemaType;
}) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<AnimalSchemaType>({
    defaultValues,
    resolver: zodResolver(AnimalSchema),
  });

  const submitHandler: SubmitHandler<AnimalSchemaType> = async (
    values: AnimalSchemaType
  ) => {
    try {
      await onSubmit(values);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className="flex flex-col space-y-6"
      onSubmit={handleSubmit(submitHandler)}
    >
      <section className="grid grid-cols-2 gap-4 items-start">
        <div className="col-span-full grid items-center gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} />
          <FormError>{errors.name?.message}</FormError>
        </div>

        <div className="col-span-full">
          <Label>Type</Label>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col space-y-1"
                defaultValue={defaultValues?.type}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dog" id="male" />
                  <Label htmlFor="male">Dog</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cat" id="female" />
                  <Label htmlFor="female">Cat</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            )}
          />
          <FormError>{errors.type?.message}</FormError>
        </div>

        <div className="col-span-full">
          <Label>Age</Label>
          <Input
            id="age"
            type="number"
            {...register("age", { valueAsNumber: true })}
          />
          <FormError>{errors.age?.message}</FormError>
        </div>
      </section>

      <section className="flex justify-end">
        {!isSubmitting ? (
          <Button type="submit">Save</Button>
        ) : (
          <ButtonLoading />
        )}
      </section>
    </form>
  );
};

export default AnimalForm;
