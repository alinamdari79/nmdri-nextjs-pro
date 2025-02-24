"use server";
import "server-only";

import { RegisterFormState, SignupFormSchema } from "@/lib/validations";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
const BASE_URL = process.env.BASE_URL;

export async function signup(state: RegisterFormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "post",
      body: JSON.stringify(validatedFields.data),
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    if (!res.ok) {
      return {
        /// this use for exist email that we already stored in backend
        message: data.message,
        errors: data.errors,
      };
    } else {
      await createSession({
        accessToken: data.tokens.accessToken,
        refreshToken: data.tokens.refreshToken,
      });
      redirect("/dashboard");
    }
  } catch (err) {
    return {
      message: "signup failed",
    };
  }
}