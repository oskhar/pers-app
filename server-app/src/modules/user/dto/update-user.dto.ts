import { z } from 'zod';

export const UpdateUserSchema = z.object({
  full_name: z.string().nullable(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  facebook_url: z.string().nullable(),
  instagram_url: z.string().nullable(),
  twitter_url: z.string().nullable(),
  is_public_email: z.boolean().nullable(),
});

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
