import { z } from 'zod';
// Define the Zod schema for form validation
export const contactFormSchema = z.object({
  name: z.string().min(5, {
    message: 'Name must be at least 5 characters.'
  }),
  email: z.email({
    message: 'Invalid email address.'
  }),
  message: z.string().min(10, {
    message: 'Message should be at least 10 characters.'
  })
});
