import { Schema, model } from 'mongoose';
import { IWaterfront } from './waterfront.interface';

const waterfrontSchema = new Schema<IWaterfront>(
  {
    propertyName: { type: String, required: true, trim: true },
    propertySlug: { type: String, required: true, unique: true, trim: true },
    neighbourhood: { type: Schema.Types.ObjectId, ref: 'Neighbourhood', required: true },
    waterfrontCategory: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    propertyAddress: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    bedrooms: { type: String, required: true },
    bathrooms: { type: String, required: true },
    interiorSqft: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

waterfrontSchema.index({ propertyName: 1 });
waterfrontSchema.index({ city: 1 });
waterfrontSchema.index({ zipCode: 1 });
waterfrontSchema.index({ waterfrontCategory: 1 });
waterfrontSchema.index({ neighbourhood: 1 });

export const Waterfront = model<IWaterfront>('Waterfront', waterfrontSchema);
