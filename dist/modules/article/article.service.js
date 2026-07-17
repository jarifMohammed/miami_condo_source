"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleServices = void 0;
const article_model_1 = require("./article.model");
const createArticleIntoDB = async (payload) => {
    const result = await article_model_1.Article.create(payload);
    return result;
};
const getAllArticlesFromDB = async (query) => {
    const { title } = query;
    const filter = {};
    if (title) {
        filter.title = { $regex: title, $options: 'i' };
    }
    const result = await article_model_1.Article.find(filter).sort({ publishDate: -1 });
    return result;
};
const getArticleByIdFromDB = async (id) => {
    const result = await article_model_1.Article.findById(id);
    return result;
};
const updateArticleInDB = async (id, payload) => {
    const result = await article_model_1.Article.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteArticleFromDB = async (id) => {
    const result = await article_model_1.Article.findByIdAndDelete(id);
    return result;
};
exports.ArticleServices = {
    createArticleIntoDB,
    getAllArticlesFromDB,
    getArticleByIdFromDB,
    updateArticleInDB,
    deleteArticleFromDB,
};
