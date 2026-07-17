import { IArticle } from './article.interface';
import { Article } from './article.model';

const createArticleIntoDB = async (payload: IArticle) => {
  const result = await Article.create(payload);
  return result;
};

const getAllArticlesFromDB = async (query: Record<string, unknown>) => {
  const { title } = query;

  const filter: Record<string, any> = {};

  if (title) {
    filter.title = { $regex: title as string, $options: 'i' };
  }

  const result = await Article.find(filter).sort({ publishDate: -1 });
  return result;
};

const getArticleByIdFromDB = async (id: string) => {
  const result = await Article.findById(id);
  return result;
};

const updateArticleInDB = async (id: string, payload: Partial<IArticle>) => {
  const result = await Article.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteArticleFromDB = async (id: string) => {
  const result = await Article.findByIdAndDelete(id);
  return result;
};

export const ArticleServices = {
  createArticleIntoDB,
  getAllArticlesFromDB,
  getArticleByIdFromDB,
  updateArticleInDB,
  deleteArticleFromDB,
};
