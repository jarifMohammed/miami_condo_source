export interface IArticle {
  title: string;
  authorName: string;
  publishDate: Date;
  articleContent: string;
  featureImage: string;
  createdAt?: Date;
  updatedAt?: Date;
}
