export enum EAmenities {
  SWIMMING_POOL = 'swimming pool',
  SPA = 'spa',
  FITNESS_CENTER = 'fitness center',
  YOGA_STUDIO = 'yoga studio',
  BUSINESS_CENTER = 'business center',
  PRIVATE_LOUNGE = 'private lounge',
  RESTAURANT = 'restaurant',
  CONCIERGE = 'concierge',
  PET_FRIENDLY = 'pet friendly',
  PARKING = 'parking',
  PRIVATE_MARINA = 'private marina',
  CHILDRENS_AREA = 'childrens area',
  OUTDOOR_KITCHEN = 'outdoor kitchen',
  WINE_LOUNGE = 'wine lounge',
  GAME_ROOM = 'game room',
}

export interface INeighbourhoodThemeImage {
  url: string;
  index: number;
}

export interface INeighbourhoodLocation {
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  mapEmbedUrl: string;
}

export interface INeighbourhood {
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  themeImages: INeighbourhoodThemeImage[];
  amenities: EAmenities[];
  location: INeighbourhoodLocation;
  isFeatured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
