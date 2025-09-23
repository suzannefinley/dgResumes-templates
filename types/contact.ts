import { z } from 'zod';
import { contactFormSchema } from '@/lib/validators/contact';
// Define the Zod schema for form validation

export type ContactForm = z.infer<typeof contactFormSchema>;
