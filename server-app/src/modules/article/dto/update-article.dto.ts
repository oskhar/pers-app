import { z } from 'zod';
import { ArticleStatusEnum } from '../enums/article-status.enum';

export const UpdateArticleDtoSchema = z.object({
  title: z.string().optional(),
  summary: z.string().optional(),
  content: z.string().optional(),
  status: z.nativeEnum(ArticleStatusEnum).optional(),
});

export type UpdateArticleDto = z.infer<typeof UpdateArticleDtoSchema>;
