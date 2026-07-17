"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleValidation = void 0;
const zod_1 = require("zod");
const createArticleValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        authorName: zod_1.z.string({ required_error: 'Author name is required' }),
        publishDate: zod_1.z.string({ required_error: 'Publish date is required' }).datetime().or(zod_1.z.date()),
        articleContent: zod_1.z.string({ required_error: 'Article content is required' }),
        featureImage: zod_1.z.string({ required_error: 'Feature image is required' }),
    }),
});
const updateArticleValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        authorName: zod_1.z.string().optional(),
        publishDate: zod_1.z.string().datetime().or(zod_1.z.date()).optional(),
        articleContent: zod_1.z.string().optional(),
        featureImage: zod_1.z.string().optional(),
    }),
});
exports.ArticleValidation = {
    createArticleValidationSchema,
    updateArticleValidationSchema,
};
