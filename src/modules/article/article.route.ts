import express from 'express';
import { ArticleControllers } from './article.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ArticleValidation } from './article.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ArticleValidation.createArticleValidationSchema),
  ArticleControllers.createArticle
);

router.get('/', ArticleControllers.getAllArticles);

router.get('/:id', ArticleControllers.getArticleById);

router.patch(
  '/:id',
  validateRequest(ArticleValidation.updateArticleValidationSchema),
  ArticleControllers.updateArticle
);

router.delete('/:id', ArticleControllers.deleteArticle);

export default router;
