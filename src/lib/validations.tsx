import { z } from "zod";

export const SignupFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "حداقل ۲ کارکتر وارد کنید" })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "حداقل ۲ کارکتر وارد کنید" })
    .trim(),
  email: z.string().email({ message: "لطفا یک ایمیل معتبر وارد کنید" }).trim(),
  password: z
    .string()
    .min(8, { message: "حداقل ۸ کارکتر وارد کنید" })
    .regex(/[a-zA-Z]/, { message: "شامل حداقل یک حرف باشد" })
    .regex(/[0-9]/, { message: "شامل حداقل یک عدد باشد" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "شامل حداقل یک کارکتر خاص باشد",
    })
    .trim(),
    confirmPassword: z
    .string()
    .min(8, { message: "حداقل ۸ کارکتر وارد کنید" })
    .regex(/[a-zA-Z]/, { message: "شامل حداقل یک حرف باشد"  })
    .regex(/[0-9]/, { message: "شامل حداقل یک عدد باشد" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "شامل حداقل یک کارکتر خاص باشد",
    })
    .trim(),
});

export type RegisterFormState =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      message?: string;
    }
  | undefined;
