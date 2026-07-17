"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const mongoose_1 = require("mongoose");
const articleSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    authorName: { type: String, required: true, trim: true },
    publishDate: { type: Date, required: true },
    articleContent: { type: String, required: true },
    featureImage: { type: String, required: true },
}, {
    timestamps: true,
});
articleSchema.index({ title: 1 });
articleSchema.index({ publishDate: -1 });
exports.Article = (0, mongoose_1.model)('Article', articleSchema);
