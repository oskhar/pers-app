import { z } from 'zod';

export const IdsSchema = z.array(z.string());

export type IdsDto = z.infer<typeof IdsSchema>;
