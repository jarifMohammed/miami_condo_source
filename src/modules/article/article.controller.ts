import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { ArticleServices } from './article.service';

const createArticle = catchAsync(async (req: Request, res: Response) => {
  const result = await ArticleServices.createArticleIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Article created successfully',
    data: result,
  });
});

const getAllArticles = catchAsync(async (req: Request, res: Response) => {
  const result = await ArticleServices.getAllArticlesFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Articles retrieved successfully',
    data: result,
  });
});

const getArticleById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ArticleServices.getArticleByIdFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Article retrieved successfully',
    data: result,
  });
});

const updateArticle = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ArticleServices.updateArticleInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Article updated successfully',
    data: result,
  });
});

const deleteArticle = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ArticleServices.deleteArticleFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Article deleted successfully',
    data: result,
  });
});

export const ArticleControllers = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
};
