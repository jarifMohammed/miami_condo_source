import { IDevelopment } from './development.interface';
import { Development } from './development.model';

const createDevelopmentIntoDB = async (payload: IDevelopment) => {
  const result = await Development.create(payload);
  return result;
};

const getAllDevelopmentsFromDB = async (query: Record<string, unknown>) => {
  const {
    developmentName,
    city,
    selectedNeighbourhood,
    constructionStage,
    category,
    amenities,
    features,
  } = query;

  const filter: Record<string, any> = {};

  if (developmentName) {
    filter.developmentName = { $regex: developmentName as string, $options: 'i' };
  }
  if (city) {
    filter.city = { $regex: city as string, $options: 'i' };
  }
  if (selectedNeighbourhood) {
    filter.selectedNeighbourhood = selectedNeighbourhood;
  }
  if (constructionStage) {
    filter.constructionStage = constructionStage;
  }
  
  if (category) {
    const parsedCategories = typeof category === 'string' ? category.split(',') : category;
    filter.category = { $in: parsedCategories };
  }

  if (amenities) {
    const parsedAmenities = typeof amenities === 'string' ? amenities.split(',') : amenities;
    filter.amenities = { $in: parsedAmenities };
  }

  if (features) {
    const parsedFeatures = typeof features === 'string' ? features.split(',') : features;
    filter.features = { $in: parsedFeatures };
  }

  const result = await Development.find(filter).populate('selectedNeighbourhood');
  return result;
};

const getDevelopmentByIdFromDB = async (id: string) => {
  const result = await Development.findById(id).populate('selectedNeighbourhood');
  return result;
};

const updateDevelopmentInDB = async (id: string, payload: Partial<IDevelopment>) => {
  const updateQuery: any = { $set: payload };
  
  if (payload.currentStage || payload.expectedDelivery) {
    const existing = await Development.findById(id);
    if (existing) {
      updateQuery.$push = {
        stageHistory: {
          currentStage: payload.currentStage || existing.currentStage || existing.constructionStage,
          expectedDelivery: payload.expectedDelivery || existing.expectedDelivery || existing.deliveryYear,
          updatedAt: new Date(),
        },
      };
    }
  }

  const result = await Development.findByIdAndUpdate(id, updateQuery, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteDevelopmentFromDB = async (id: string) => {
  const result = await Development.findByIdAndDelete(id);
  return result;
};

export const DevelopmentServices = {
  createDevelopmentIntoDB,
  getAllDevelopmentsFromDB,
  getDevelopmentByIdFromDB,
  updateDevelopmentInDB,
  deleteDevelopmentFromDB,
};
