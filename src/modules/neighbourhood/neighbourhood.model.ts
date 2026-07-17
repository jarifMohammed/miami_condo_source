import { Schema, model } from 'mongoose';
import { INeighbourhood, EAmenities } from './neighbourhood.interface';

const neighbourhoodSchema = new Schema<INeighbourhood>(
  {
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
        enum: Object.values(EAmenities),
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
  },
  {
    timestamps: true,
  }
);

// Add indexes for efficient filtering
neighbourhoodSchema.index({ name: 1 });
neighbourhoodSchema.index({ 'location.city': 1 });
neighbourhoodSchema.index({ 'location.state': 1 });
neighbourhoodSchema.index({ 'location.country': 1 });
neighbourhoodSchema.index({ amenities: 1 });

export const Neighbourhood = model<INeighbourhood>('Neighbourhood', neighbourhoodSchema);
