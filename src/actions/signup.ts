import { RegisterFormState, SignupFormSchema } from "@/lib/validations";

export async function signup(state: RegisterFormState, formData: FormData){
    const validatedFields = SignupFormSchema.safeParse(
        Object.fromEntries(formData.entries())
      )
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }
}