import { z } from 'zod';

const createArticleValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    authorName: z.string({ required_error: 'Author name is required' }),
    publishDate: z.string({ required_error: 'Publish date is required' }).datetime().or(z.date()),
    articleContent: z.string({ required_error: 'Article content is required' }),
    featureImage: z.string({ required_error: 'Feature image is required' }),
  }),
});

const updateArticleValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    authorName: z.string().optional(),
    publishDate: z.string().datetime().or(z.date()).optional(),
    articleContent: z.string().optional(),
    featureImage: z.string().optional(),
  }),
});

export const ArticleValidation = {
  createArticleValidationSchema,
  updateArticleValidationSchema,
};
