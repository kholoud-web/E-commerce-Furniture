import {z} from "zod";

export const LoginSchema = z.object({
    email: z.
    string()
    //  .min( "Email is required")
    .email("Invalid email format"),
    password :z
    .string()
    .min(6, "Password must be at least 6 characters"),

})
