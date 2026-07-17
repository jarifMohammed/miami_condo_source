import { IWaterfront } from './waterfront.interface';
import { Waterfront } from './waterfront.model';

const createWaterfrontIntoDB = async (payload: IWaterfront) => {
  const result = await Waterfront.create(payload);
  return result;
};

const getAllWaterfrontsFromDB = async (query: Record<string, unknown>) => {
  const { propertyName, city, neighbourhood, zipCode, waterfrontCategory } = query;

  const filter: Record<string, any> = {};

  if (propertyName) {
    filter.propertyName = { $regex: propertyName as string, $options: 'i' };
  }
  if (city) {
    filter.city = { $regex: city as string, $options: 'i' };
  }
  if (zipCode) {
    filter.zipCode = zipCode;
  }
  if (neighbourhood) {
    filter.neighbourhood = neighbourhood;
  }
  if (waterfrontCategory) {
    const parsedCategories = typeof waterfrontCategory === 'string' ? waterfrontCategory.split(',') : waterfrontCategory;
    filter.waterfrontCategory = { $in: parsedCategories };
  }

  const result = await Waterfront.find(filter).populate('neighbourhood');
  return result;
};

const getWaterfrontByIdFromDB = async (id: string) => {
  const result = await Waterfront.findById(id).populate('neighbourhood');
  return result;
};

const updateWaterfrontInDB = async (id: string, payload: Partial<IWaterfront>) => {
  const result = await Waterfront.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteWaterfrontFromDB = async (id: string) => {
  const result = await Waterfront.findByIdAndDelete(id);
  return result;
};

export const WaterfrontServices = {
  createWaterfrontIntoDB,
  getAllWaterfrontsFromDB,
  getWaterfrontByIdFromDB,
  updateWaterfrontInDB,
  deleteWaterfrontFromDB,
};
