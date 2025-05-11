import { z } from 'zod';

export const CreateUserSchema = z.object({
  full_name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
