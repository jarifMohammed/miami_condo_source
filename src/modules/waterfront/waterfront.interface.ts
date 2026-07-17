import { Types } from 'mongoose';

export interface IWaterfront {
  propertyName: string;
  propertySlug: string;
  neighbourhood: Types.ObjectId;
  waterfrontCategory: string;
  startingPrice: number;
  propertyAddress: string;
  city: string;
  zipCode: string;
  bedrooms: string;
  bathrooms: string;
  interiorSqft: number;
  latitude: number;
  longitude: number;
  createdAt?: Date;
  updatedAt?: Date;
}
