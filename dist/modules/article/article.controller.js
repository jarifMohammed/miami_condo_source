"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const article_service_1 = require("./article.service");
const createArticle = (0, catchAsync_1.default)(async (req, res) => {
    const result = await article_service_1.ArticleServices.createArticleIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Article created successfully',
        data: result,
    });
});
const getAllArticles = (0, catchAsync_1.default)(async (req, res) => {
    const result = await article_service_1.ArticleServices.getAllArticlesFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Articles retrieved successfully',
        data: result,
    });
});
const getArticleById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await article_service_1.ArticleServices.getArticleByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Article retrieved successfully',
        data: result,
    });
});
const updateArticle = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await article_service_1.ArticleServices.updateArticleInDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Article updated successfully',
        data: result,
    });
});
const deleteArticle = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await article_service_1.ArticleServices.deleteArticleFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Article deleted successfully',
        data: result,
    });
});
exports.ArticleControllers = {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
};
