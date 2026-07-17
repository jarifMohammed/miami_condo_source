"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsServices = void 0;
const development_model_1 = require("../development/development.model");
const waterfront_model_1 = require("../waterfront/waterfront.model");
const article_model_1 = require("../article/article.model");
const neighbourhood_model_1 = require("../neighbourhood/neighbourhood.model");
const contact_model_1 = require("../contact/contact.model");
const contact_interface_1 = require("../contact/contact.interface");
const getAnalyticsData = async () => {
    const [totalDevelopments, totalWaterfrontProperties, totalPublishedArticles, totalNeighbourhoods, totalPendingContactRequests, totalCompletedContactRequests,] = await Promise.all([
        development_model_1.Development.countDocuments(),
        waterfront_model_1.Waterfront.countDocuments(),
        article_model_1.Article.countDocuments(),
        neighbourhood_model_1.Neighbourhood.countDocuments(),
        contact_model_1.Contact.countDocuments({ status: contact_interface_1.EContactStatus.PENDING }),
        contact_model_1.Contact.countDocuments({ status: contact_interface_1.EContactStatus.COMPLETED }),
    ]);
    return {
        totalDevelopments,
        totalWaterfrontProperties,
        totalPublishedArticles,
        totalNeighbourhoods,
        totalPendingContactRequests,
        totalCompletedContactRequests,
    };
};
exports.AnalyticsServices = {
    getAnalyticsData,
};
