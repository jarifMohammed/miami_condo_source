"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeighbourhoodValidation = void 0;
const zod_1 = require("zod");
const neighbourhood_interface_1 = require("./neighbourhood.interface");
const createNeighbourhoodValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        slug: zod_1.z.string({
            required_error: 'Slug is required',
        }),
        shortDescription: zod_1.z.string({
            required_error: 'Short description is required',
        }),
        fullDescription: zod_1.z.string({
            required_error: 'Full description is required',
        }),
        heroImage: zod_1.z.string({
            required_error: 'Hero image URL is required',
        }),
        themeImages: zod_1.z.array(zod_1.z.object({
            url: zod_1.z.string({
                required_error: 'Theme image URL is required',
            }),
            index: zod_1.z.number({
                required_error: 'Theme image index is required',
            }),
        })).min(1, 'At least one theme image is required'),
        amenities: zod_1.z.array(zod_1.z.nativeEnum(neighbourhood_interface_1.EAmenities)).min(1, 'At least one amenity is required'),
        location: zod_1.z.object({
            city: zod_1.z.string({
                required_error: 'City is required',
            }),
            state: zod_1.z.string({
                required_error: 'State is required',
            }),
            country: zod_1.z.string({
                required_error: 'Country is required',
            }),
            latitude: zod_1.z.number({
                required_error: 'Latitude is required',
            }),
            longitude: zod_1.z.number({
                required_error: 'Longitude is required',
            }),
            mapEmbedUrl: zod_1.z.string({
                required_error: 'Map embed URL is required',
            }),
        }),
        isFeatured: zod_1.z.boolean().optional(),
    }),
});
const updateNeighbourhoodValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        slug: zod_1.z.string().optional(),
        shortDescription: zod_1.z.string().optional(),
        fullDescription: zod_1.z.string().optional(),
        heroImage: zod_1.z.string().optional(),
        themeImages: zod_1.z.array(zod_1.z.object({
            url: zod_1.z.string().optional(),
            index: zod_1.z.number().optional(),
        })).optional(),
        amenities: zod_1.z.array(zod_1.z.nativeEnum(neighbourhood_interface_1.EAmenities)).optional(),
        location: zod_1.z.object({
            city: zod_1.z.string().optional(),
            state: zod_1.z.string().optional(),
            country: zod_1.z.string().optional(),
            latitude: zod_1.z.number().optional(),
            longitude: zod_1.z.number().optional(),
            mapEmbedUrl: zod_1.z.string().optional(),
        }).optional(),
        isFeatured: zod_1.z.boolean().optional(),
    }),
});
exports.NeighbourhoodValidation = {
    createNeighbourhoodValidationSchema,
    updateNeighbourhoodValidationSchema,
};
