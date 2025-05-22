import { z } from 'zod';
import { ArticleStatusEnum } from '../enums/article-status.enum';

export const CreateArticleDtoSchema = z.object({
  title: z.string(),
  summary: z.string(),
  content: z.string(),
  author_id: z.number(),
  status: z.nativeEnum(ArticleStatusEnum),
});

export type CreateArticleDto = z.infer<typeof CreateArticleDtoSchema>;
