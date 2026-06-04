import { z } from "zod";

export const inquiryOptions = [
  "Product enquiry",
  "Bulk quotation",
  "Freight logistics",
  "Domestic shipping",
  "Partnership",
  "Other",
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  contact: z.string().trim().min(7, "Email or phone number is required"),
  option: z.enum(inquiryOptions, "Please select an option"),
  message: z.string().trim().min(10, "Please add a short message"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
