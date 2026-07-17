"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const article_controller_1 = require("./article.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const article_validation_1 = require("./article.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(article_validation_1.ArticleValidation.createArticleValidationSchema), article_controller_1.ArticleControllers.createArticle);
router.get('/', article_controller_1.ArticleControllers.getAllArticles);
router.get('/:id', article_controller_1.ArticleControllers.getArticleById);
router.patch('/:id', (0, validateRequest_1.default)(article_validation_1.ArticleValidation.updateArticleValidationSchema), article_controller_1.ArticleControllers.updateArticle);
router.delete('/:id', article_controller_1.ArticleControllers.deleteArticle);
exports.default = router;
