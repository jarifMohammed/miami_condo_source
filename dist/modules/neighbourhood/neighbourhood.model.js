"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Neighbourhood = void 0;
const mongoose_1 = require("mongoose");
const neighbourhood_interface_1 = require("./neighbourhood.interface");
const neighbourhoodSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    fullDescription: {
        type: String,
        required: true,
    },
    heroImage: {
        type: String,
        required: true,
    },
    themeImages: [
        {
            url: { type: String, required: true },
            index: { type: Number, required: true },
        },
    ],
    amenities: [
        {
            type: String,
            enum: Object.values(neighbourhood_interface_1.EAmenities),
            required: true,
        },
    ],
    location: {
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        mapEmbedUrl: { type: String, required: true },
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
// Add indexes for efficient filtering
neighbourhoodSchema.index({ name: 1 });
neighbourhoodSchema.index({ 'location.city': 1 });
neighbourhoodSchema.index({ 'location.state': 1 });
neighbourhoodSchema.index({ 'location.country': 1 });
neighbourhoodSchema.index({ amenities: 1 });
exports.Neighbourhood = (0, mongoose_1.model)('Neighbourhood', neighbourhoodSchema);
