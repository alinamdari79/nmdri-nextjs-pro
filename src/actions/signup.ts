import { RegisterFormState, SignupFormSchema } from "@/lib/validations";

export async function signup(state: RegisterFormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // try {
  //   const res = await fetch("http://localhost:3000/auth/signup", {
  //     method: "post",
  //     body: JSON.stringify(validatedFields.data),
  //     headers: { "Content-type": "application/json" },
  //   });
  //   const data = await res.json();
  //   if (!res.ok) {
  //     return {
  //       /// this use for exist email that we already stored in backend
  //       message: data.message,
  //       errors: data.errors,
  //     };
  //   } else {

  //   }
  // } catch (err) {
  //   return {
  //     message: "signup failed",
  //   };
  // }
}