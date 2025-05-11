import { z } from 'zod';

export const UpdateUserSchema = z.object({
  fullname: z.string(),
  email: z.string(),
});

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
