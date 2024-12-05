import { UserPatch } from "@/models/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { UserSchema, UserSchemaType } from "./validationSchemas/validation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import FormError from "../ui/FormError";
import { Button } from "../ui/button";
import { ButtonLoading } from "../ui/ButtonLoading";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const UserForm = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (values: UserPatch) => Promise<void>;
  defaultValues?: UserSchemaType;
}) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<UserSchemaType>({
    defaultValues,
    resolver: zodResolver(UserSchema),
  });

  const submitHandler: SubmitHandler<UserSchemaType> = async (
    values: UserSchemaType
  ) => {
    try {
      const submitValues = {
        ...values,
        banned: values.name === "true" ? true : false,
      };

      await onSubmit(submitValues);
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
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </div>

        <div className="col-span-full">
          <Label>Gender</Label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col space-y-1"
                defaultValue={defaultValues?.gender || "male"}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            )}
          />
          <FormError>{errors.gender?.message}</FormError>
        </div>

        <div className="col-span-full">
          <Label>Banned</Label>
          <Controller
            name="banned"
            control={control}
            render={({ field }) => (
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col space-y-1"
                defaultValue={defaultValues?.banned || "true"}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="banned-yes" />
                  <Label htmlFor="banned-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="banned-no" />
                  <Label htmlFor="banned-no">No</Label>
                </div>
              </RadioGroup>
            )}
          />
          <FormError>{errors.banned?.message}</FormError>
        </div>
      </section>

      <section className="flex justify-end">
        {!isSubmitting ? (
          <Button type="submit">Save changes</Button>
        ) : (
          <ButtonLoading />
        )}
      </section>
    </form>
  );
};

export default UserForm;
