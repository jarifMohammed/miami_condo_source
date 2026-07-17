import { z } from 'zod';

const createWaterfrontValidationSchema = z.object({
  body: z.object({
    propertyName: z.string({ required_error: 'Property name is required' }),
    propertySlug: z.string({ required_error: 'Property slug is required' }),
    neighbourhood: z.string({ required_error: 'Neighbourhood ID is required' }),
    waterfrontCategory: z.string({ required_error: 'Waterfront category is required' }),
    startingPrice: z.number({ required_error: 'Starting price is required' }),
    propertyAddress: z.string({ required_error: 'Property address is required' }),
    city: z.string({ required_error: 'City is required' }),
    zipCode: z.string({ required_error: 'Zip code is required' }),
    bedrooms: z.string({ required_error: 'Bedrooms is required' }),
    bathrooms: z.string({ required_error: 'Bathrooms is required' }),
    interiorSqft: z.number({ required_error: 'Interior Sqft is required' }),
    latitude: z.number({ required_error: 'Latitude is required' }),
    longitude: z.number({ required_error: 'Longitude is required' }),
  }),
});

const updateWaterfrontValidationSchema = z.object({
  body: z.object({
    propertyName: z.string().optional(),
    propertySlug: z.string().optional(),
    neighbourhood: z.string().optional(),
    waterfrontCategory: z.string().optional(),
    startingPrice: z.number().optional(),
    propertyAddress: z.string().optional(),
    city: z.string().optional(),
    zipCode: z.string().optional(),
    bedrooms: z.string().optional(),
    bathrooms: z.string().optional(),
    interiorSqft: z.number().optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
  }),
});

export const WaterfrontValidation = {
  createWaterfrontValidationSchema,
  updateWaterfrontValidationSchema,
};
