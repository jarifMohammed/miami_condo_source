import { Schema, model } from 'mongoose';
import { IDevelopment, IResidence, EConstructionStage, ECategory, EResidenceStatus, ECurrentStage } from './development.interface';
import { EAmenities } from '../neighbourhood/neighbourhood.interface';

const residenceSchema = new Schema<IResidence>({
  residenceType: { type: String, required: true },
  bedrooms: { type: String, required: true },
  bathrooms: { type: String, required: true },
  interiorSize: { type: String, required: true },
  terraceSize: { type: String, required: true },
  startingPrice: { type: Number, required: true },
  status: { type: String, enum: Object.values(EResidenceStatus), required: true },
  floorPlan: { type: String, required: true },
});

const developmentSchema = new Schema<IDevelopment>(
  {
    developmentName: { type: String, required: true, trim: true },
    propertySlug: { type: String, required: true, unique: true, trim: true },
    selectedNeighbourhood: { type: Schema.Types.ObjectId, ref: 'Neighbourhood', required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    constructionStage: { type: String, enum: Object.values(EConstructionStage), required: true },
    deliveryYear: { type: String, required: true },
    developer: { type: String, required: true },
    pricePerSqft: { type: Number, required: true },
    bedrooms: { type: String, required: true },
    stories: { type: Number, required: true },
    totalResidencies: { type: Number, required: true },
    sizeRange: { type: String, required: true },
    heroImage: { type: String, required: true },
    galleryImages: [
      {
        url: { type: String, required: true },
        index: { type: Number, required: true },
      },
    ],
    projectOverview: { type: String, required: true },
    shortIntroduction: { type: String, required: true },
    amenities: [
      {
        type: String,
        enum: Object.values(EAmenities),
        required: true,
      },
    ],
    category: [
      {
        type: String,
        enum: Object.values(ECategory),
        required: true,
      },
    ],
    features: [{ type: String, required: true }],
    depositStructure: { type: String, required: true },
    salesProgress: { type: String, required: true },
    rentalPolicy: { type: String, required: true },
    currentStage: { type: String, enum: Object.values(ECurrentStage) },
    expectedDelivery: { type: String },
    stageHistory: [
      {
        currentStage: { type: String, enum: Object.values(ECurrentStage), required: true },
        expectedDelivery: { type: String, required: true },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    residences: [residenceSchema],
  },
  {
    timestamps: true,
  }
);

// Indexes for fast searching and filtering
developmentSchema.index({ developmentName: 1 });
developmentSchema.index({ city: 1 });
developmentSchema.index({ selectedNeighbourhood: 1 });
developmentSchema.index({ constructionStage: 1 });
developmentSchema.index({ category: 1 });
developmentSchema.index({ amenities: 1 });

export const Development = model<IDevelopment>('Development', developmentSchema);
