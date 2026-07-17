"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopmentValidation = void 0;
const zod_1 = require("zod");
const development_interface_1 = require("./development.interface");
const neighbourhood_interface_1 = require("../neighbourhood/neighbourhood.interface");
const residenceValidationSchema = zod_1.z.object({
    residenceType: zod_1.z.string({ required_error: 'Residence type is required' }),
    bedrooms: zod_1.z.string({ required_error: 'Bedrooms is required' }),
    bathrooms: zod_1.z.string({ required_error: 'Bathrooms is required' }),
    interiorSize: zod_1.z.string({ required_error: 'Interior size is required' }),
    terraceSize: zod_1.z.string({ required_error: 'Terrace size is required' }),
    startingPrice: zod_1.z.number({ required_error: 'Starting price is required' }),
    status: zod_1.z.nativeEnum(development_interface_1.EResidenceStatus, { required_error: 'Status is required' }),
    floorPlan: zod_1.z.string({ required_error: 'Floor plan is required' }),
});
const createDevelopmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        developmentName: zod_1.z.string({ required_error: 'Development name is required' }),
        propertySlug: zod_1.z.string({ required_error: 'Property slug is required' }),
        selectedNeighbourhood: zod_1.z.string({ required_error: 'Selected neighbourhood ID is required' }),
        address: zod_1.z.string({ required_error: 'Address is required' }),
        city: zod_1.z.string({ required_error: 'City is required' }),
        startingPrice: zod_1.z.number({ required_error: 'Starting price is required' }),
        constructionStage: zod_1.z.nativeEnum(development_interface_1.EConstructionStage, { required_error: 'Construction stage is required' }),
        deliveryYear: zod_1.z.string({ required_error: 'Delivery year is required' }),
        developer: zod_1.z.string({ required_error: 'Developer is required' }),
        pricePerSqft: zod_1.z.number({ required_error: 'Price per sqft is required' }),
        bedrooms: zod_1.z.string({ required_error: 'Bedrooms info is required' }),
        stories: zod_1.z.number({ required_error: 'Stories is required' }),
        totalResidencies: zod_1.z.number({ required_error: 'Total residencies is required' }),
        sizeRange: zod_1.z.string({ required_error: 'Size range is required' }),
        heroImage: zod_1.z.string({ required_error: 'Hero image is required' }),
        galleryImages: zod_1.z.array(zod_1.z.object({
            url: zod_1.z.string({ required_error: 'Gallery image URL is required' }),
            index: zod_1.z.number({ required_error: 'Gallery image index is required' }),
        })).min(1, 'At least one gallery image is required'),
        projectOverview: zod_1.z.string({ required_error: 'Project overview is required' }),
        shortIntroduction: zod_1.z.string({ required_error: 'Short introduction is required' }),
        amenities: zod_1.z.array(zod_1.z.nativeEnum(neighbourhood_interface_1.EAmenities)).min(1, 'At least one amenity is required'),
        category: zod_1.z.array(zod_1.z.nativeEnum(development_interface_1.ECategory)).min(1, 'At least one category is required'),
        features: zod_1.z.array(zod_1.z.string()).min(1, 'At least one feature is required'),
        depositStructure: zod_1.z.string({ required_error: 'Deposit structure is required' }),
        salesProgress: zod_1.z.string({ required_error: 'Sales progress is required' }),
        rentalPolicy: zod_1.z.string({ required_error: 'Rental policy is required' }),
        currentStage: zod_1.z.nativeEnum(development_interface_1.ECurrentStage).optional(),
        expectedDelivery: zod_1.z.string().optional(),
        residences: zod_1.z.array(residenceValidationSchema).min(1, 'At least one residence is required'),
    }),
});
const updateDevelopmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        developmentName: zod_1.z.string().optional(),
        propertySlug: zod_1.z.string().optional(),
        selectedNeighbourhood: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        city: zod_1.z.string().optional(),
        startingPrice: zod_1.z.number().optional(),
        constructionStage: zod_1.z.nativeEnum(development_interface_1.EConstructionStage).optional(),
        deliveryYear: zod_1.z.string().optional(),
        developer: zod_1.z.string().optional(),
        pricePerSqft: zod_1.z.number().optional(),
        bedrooms: zod_1.z.string().optional(),
        stories: zod_1.z.number().optional(),
        totalResidencies: zod_1.z.number().optional(),
        sizeRange: zod_1.z.string().optional(),
        heroImage: zod_1.z.string().optional(),
        galleryImages: zod_1.z.array(zod_1.z.object({
            url: zod_1.z.string().optional(),
            index: zod_1.z.number().optional(),
        })).optional(),
        projectOverview: zod_1.z.string().optional(),
        shortIntroduction: zod_1.z.string().optional(),
        amenities: zod_1.z.array(zod_1.z.nativeEnum(neighbourhood_interface_1.EAmenities)).optional(),
        category: zod_1.z.array(zod_1.z.nativeEnum(development_interface_1.ECategory)).optional(),
        features: zod_1.z.array(zod_1.z.string()).optional(),
        depositStructure: zod_1.z.string().optional(),
        salesProgress: zod_1.z.string().optional(),
        rentalPolicy: zod_1.z.string().optional(),
        currentStage: zod_1.z.nativeEnum(development_interface_1.ECurrentStage).optional(),
        expectedDelivery: zod_1.z.string().optional(),
        residences: zod_1.z.array(residenceValidationSchema.partial()).optional(),
    }),
});
exports.DevelopmentValidation = {
    createDevelopmentValidationSchema,
    updateDevelopmentValidationSchema,
};
