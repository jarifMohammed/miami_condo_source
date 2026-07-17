"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterfrontValidation = void 0;
const zod_1 = require("zod");
const createWaterfrontValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        propertyName: zod_1.z.string({ required_error: 'Property name is required' }),
        propertySlug: zod_1.z.string({ required_error: 'Property slug is required' }),
        neighbourhood: zod_1.z.string({ required_error: 'Neighbourhood ID is required' }),
        waterfrontCategory: zod_1.z.string({ required_error: 'Waterfront category is required' }),
        startingPrice: zod_1.z.number({ required_error: 'Starting price is required' }),
        propertyAddress: zod_1.z.string({ required_error: 'Property address is required' }),
        city: zod_1.z.string({ required_error: 'City is required' }),
        zipCode: zod_1.z.string({ required_error: 'Zip code is required' }),
        bedrooms: zod_1.z.string({ required_error: 'Bedrooms is required' }),
        bathrooms: zod_1.z.string({ required_error: 'Bathrooms is required' }),
        interiorSqft: zod_1.z.number({ required_error: 'Interior Sqft is required' }),
        latitude: zod_1.z.number({ required_error: 'Latitude is required' }),
        longitude: zod_1.z.number({ required_error: 'Longitude is required' }),
    }),
});
const updateWaterfrontValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        propertyName: zod_1.z.string().optional(),
        propertySlug: zod_1.z.string().optional(),
        neighbourhood: zod_1.z.string().optional(),
        waterfrontCategory: zod_1.z.string().optional(),
        startingPrice: zod_1.z.number().optional(),
        propertyAddress: zod_1.z.string().optional(),
        city: zod_1.z.string().optional(),
        zipCode: zod_1.z.string().optional(),
        bedrooms: zod_1.z.string().optional(),
        bathrooms: zod_1.z.string().optional(),
        interiorSqft: zod_1.z.number().optional(),
        latitude: zod_1.z.number().optional(),
        longitude: zod_1.z.number().optional(),
    }),
});
exports.WaterfrontValidation = {
    createWaterfrontValidationSchema,
    updateWaterfrontValidationSchema,
};
