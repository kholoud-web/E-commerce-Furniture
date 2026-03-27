import { z } from "zod";

export const ContactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full Name must be at least 2 characters"),
    // .nonempty("Full Name is required"),
    

  email: z
    .string()
    .email("Invalid email address"),

  subject: z.string().optional(),

  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    // .nonempty("Message is required"),
});