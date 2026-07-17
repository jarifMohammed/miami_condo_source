"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterfrontServices = void 0;
const waterfront_model_1 = require("./waterfront.model");
const createWaterfrontIntoDB = async (payload) => {
    const result = await waterfront_model_1.Waterfront.create(payload);
    return result;
};
const getAllWaterfrontsFromDB = async (query) => {
    const { propertyName, city, neighbourhood, zipCode, waterfrontCategory } = query;
    const filter = {};
    if (propertyName) {
        filter.propertyName = { $regex: propertyName, $options: 'i' };
    }
    if (city) {
        filter.city = { $regex: city, $options: 'i' };
    }
    if (zipCode) {
        filter.zipCode = zipCode;
    }
    if (neighbourhood) {
        filter.neighbourhood = neighbourhood;
    }
    if (waterfrontCategory) {
        const parsedCategories = typeof waterfrontCategory === 'string' ? waterfrontCategory.split(',') : waterfrontCategory;
        filter.waterfrontCategory = { $in: parsedCategories };
    }
    const result = await waterfront_model_1.Waterfront.find(filter).populate('neighbourhood');
    return result;
};
const getWaterfrontByIdFromDB = async (id) => {
    const result = await waterfront_model_1.Waterfront.findById(id).populate('neighbourhood');
    return result;
};
const updateWaterfrontInDB = async (id, payload) => {
    const result = await waterfront_model_1.Waterfront.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteWaterfrontFromDB = async (id) => {
    const result = await waterfront_model_1.Waterfront.findByIdAndDelete(id);
    return result;
};
exports.WaterfrontServices = {
    createWaterfrontIntoDB,
    getAllWaterfrontsFromDB,
    getWaterfrontByIdFromDB,
    updateWaterfrontInDB,
    deleteWaterfrontFromDB,
};
