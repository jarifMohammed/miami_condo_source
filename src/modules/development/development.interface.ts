import { Types } from 'mongoose';
import { EAmenities } from '../neighbourhood/neighbourhood.interface';

export enum EConstructionStage {
  PRE_CONSTRUCTION = 'pre-construction',
  UNDER_CONSTRUCTION = 'under construction',
  MOVE_IN_READY = 'move in ready',
}

export enum ECategory {
  WATERFRONT = 'waterfront',
  LUXURY = 'luxury',
}

export enum EResidenceStatus {
  AVAILABLE = 'available',
  SOLD = 'sold',
}

export interface IDevelopmentGalleryImage {
  url: string;
  index: number;
}

export interface IResidence {
  residenceType: string;
  bedrooms: string; // or number, but requirements said "residence type, bedrooms, bathroom, interior size, terrace size... string/number" - I will use strings to allow "2-3", "2.5" etc. or numbers for bathrooms.
  bathrooms: string;
  interiorSize: string;
  terraceSize: string;
  startingPrice: number;
  status: EResidenceStatus;
  floorPlan: string;
}

export enum ECurrentStage {
  PLANNING = 'planning',
  FOUNDATION = 'foundation',
  STRUCTURE_EXTERIOR = 'structure exterior',
  INTERIOR_FINISHING = 'interior finishing',
  COMPLETED = 'completed',
}

export interface IStageHistory {
  currentStage: ECurrentStage;
  expectedDelivery: string;
  updatedAt: Date;
}

export interface IDevelopment {
  developmentName: string;
  propertySlug: string;
  selectedNeighbourhood: Types.ObjectId;
  address: string;
  city: string; // Added for fast filtering
  startingPrice: number;
  constructionStage: EConstructionStage;
  deliveryYear: string;
  developer: string;
  pricePerSqft: number;
  bedrooms: string;
  stories: number;
  totalResidencies: number;
  sizeRange: string;
  heroImage: string;
  galleryImages: IDevelopmentGalleryImage[];
  projectOverview: string;
  shortIntroduction: string;
  amenities: EAmenities[];
  category: ECategory[];
  features: string[];
  depositStructure: string;
  salesProgress: string;
  rentalPolicy: string;
  currentStage?: ECurrentStage;
  expectedDelivery?: string;
  stageHistory?: IStageHistory[];
  residences: IResidence[];
  createdAt?: Date;
  updatedAt?: Date;
}
