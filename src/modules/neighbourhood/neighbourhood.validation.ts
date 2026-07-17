import { z } from 'zod';
import { EAmenities } from './neighbourhood.interface';

const createNeighbourhoodValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    slug: z.string({
      required_error: 'Slug is required',
    }),
    shortDescription: z.string({
      required_error: 'Short description is required',
    }),
    fullDescription: z.string({
      required_error: 'Full description is required',
    }),
    heroImage: z.string({
      required_error: 'Hero image URL is required',
    }),
    themeImages: z.array(
      z.object({
        url: z.string({
          required_error: 'Theme image URL is required',
        }),
        index: z.number({
          required_error: 'Theme image index is required',
        }),
      })
    ).min(1, 'At least one theme image is required'),
    amenities: z.array(z.nativeEnum(EAmenities)).min(1, 'At least one amenity is required'),
    location: z.object({
      city: z.string({
        required_error: 'City is required',
      }),
      state: z.string({
        required_error: 'State is required',
      }),
      country: z.string({
        required_error: 'Country is required',
      }),
      latitude: z.number({
        required_error: 'Latitude is required',
      }),
      longitude: z.number({
        required_error: 'Longitude is required',
      }),
      mapEmbedUrl: z.string({
        required_error: 'Map embed URL is required',
      }),
    }),
    isFeatured: z.boolean().optional(),
  }),
});

const updateNeighbourhoodValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    slug: z.string().optional(),
    shortDescription: z.string().optional(),
    fullDescription: z.string().optional(),
    heroImage: z.string().optional(),
    themeImages: z.array(
      z.object({
        url: z.string().optional(),
        index: z.number().optional(),
      })
    ).optional(),
    amenities: z.array(z.nativeEnum(EAmenities)).optional(),
    location: z.object({
      city: z.string().optional(),
      state: z.string().optional(),
      country: z.string().optional(),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
      mapEmbedUrl: z.string().optional(),
    }).optional(),
    isFeatured: z.boolean().optional(),
  }),
});

export const NeighbourhoodValidation = {
  createNeighbourhoodValidationSchema,
  updateNeighbourhoodValidationSchema,
};
