import { z } from 'zod';

export const CreateUserSchema = z.object({
  fullname: z.string(),
  email: z.string(),
  phone: z.string(),
  password: z.string(),
  position: z.string(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
