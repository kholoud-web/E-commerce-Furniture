import { z } from "zod";

export const ContactSchema = z.object({
  fullName: z
    .string()
    .min(2, "First name must be at least 2 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  subject: z.string().optional,
  message : z.string(),

});