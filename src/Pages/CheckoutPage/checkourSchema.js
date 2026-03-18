import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters"),

  company: z.string().optional(),

  country: z
    .string()
    .min(1, "Country is required"),

  address: z
    .string()
    .min(5, "Address is required"),

  city: z
    .string()
    .min(2, "City is required"),

  zip: z
    .string()
    .min(3, "ZIP code is required"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),

  email: z
    .string()
    .email("Invalid email address"),

  notes: z.string().optional(),

  payment: z
    .string(),

    cardNumber: z.string().optional(),
    expiry: z.string().optional(),
    cvv: z.string().optional(),
  })
  .refine((data) => {
    if (data.payment === "card") {
      return data.cardNumber && data.expiry && data.cvv;
    }
    return true;
  }, {
    message: "Card details are required",
    path: ["cardNumber"]
});