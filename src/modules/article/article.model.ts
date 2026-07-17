import { Schema, model } from 'mongoose';
import { IArticle } from './article.interface';

const articleSchema = new Schema<IArticle>(
  {
    title: { type: String, required: true, trim: true },
    authorName: { type: String, required: true, trim: true },
    publishDate: { type: Date, required: true },
    articleContent: { type: String, required: true },
    featureImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

articleSchema.index({ title: 1 });
articleSchema.index({ publishDate: -1 });

export const Article = model<IArticle>('Article', articleSchema);
