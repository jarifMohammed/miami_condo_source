"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopmentServices = void 0;
const development_model_1 = require("./development.model");
const createDevelopmentIntoDB = async (payload) => {
    const result = await development_model_1.Development.create(payload);
    return result;
};
const getAllDevelopmentsFromDB = async (query) => {
    const { developmentName, city, selectedNeighbourhood, constructionStage, category, amenities, features, } = query;
    const filter = {};
    if (developmentName) {
        filter.developmentName = { $regex: developmentName, $options: 'i' };
    }
    if (city) {
        filter.city = { $regex: city, $options: 'i' };
    }
    if (selectedNeighbourhood) {
        filter.selectedNeighbourhood = selectedNeighbourhood;
    }
    if (constructionStage) {
        filter.constructionStage = constructionStage;
    }
    if (category) {
        const parsedCategories = typeof category === 'string' ? category.split(',') : category;
        filter.category = { $in: parsedCategories };
    }
    if (amenities) {
        const parsedAmenities = typeof amenities === 'string' ? amenities.split(',') : amenities;
        filter.amenities = { $in: parsedAmenities };
    }
    if (features) {
        const parsedFeatures = typeof features === 'string' ? features.split(',') : features;
        filter.features = { $in: parsedFeatures };
    }
    const result = await development_model_1.Development.find(filter).populate('selectedNeighbourhood');
    return result;
};
const getDevelopmentByIdFromDB = async (id) => {
    const result = await development_model_1.Development.findById(id).populate('selectedNeighbourhood');
    return result;
};
const updateDevelopmentInDB = async (id, payload) => {
    const updateQuery = { $set: payload };
    if (payload.currentStage || payload.expectedDelivery) {
        const existing = await development_model_1.Development.findById(id);
        if (existing) {
            updateQuery.$push = {
                stageHistory: {
                    currentStage: payload.currentStage || existing.currentStage || existing.constructionStage,
                    expectedDelivery: payload.expectedDelivery || existing.expectedDelivery || existing.deliveryYear,
                    updatedAt: new Date(),
                },
            };
        }
    }
    const result = await development_model_1.Development.findByIdAndUpdate(id, updateQuery, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteDevelopmentFromDB = async (id) => {
    const result = await development_model_1.Development.findByIdAndDelete(id);
    return result;
};
exports.DevelopmentServices = {
    createDevelopmentIntoDB,
    getAllDevelopmentsFromDB,
    getDevelopmentByIdFromDB,
    updateDevelopmentInDB,
    deleteDevelopmentFromDB,
};
