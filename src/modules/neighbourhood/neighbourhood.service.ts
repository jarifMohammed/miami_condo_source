import { INeighbourhood } from './neighbourhood.interface';
import { Neighbourhood } from './neighbourhood.model';

const createNeighbourhoodIntoDB = async (payload: INeighbourhood) => {
  const result = await Neighbourhood.create(payload);
  return result;
};

const getAllNeighbourhoodsFromDB = async (query: Record<string, unknown>) => {
  const { name, facilities, latitude, longitude, city, state, country, amenities, isFeatured } = query;

  const filter: Record<string, any> = {};

  if (isFeatured !== undefined) {
    filter.isFeatured = isFeatured === 'true' || isFeatured === true;
  }

  if (name) {
    filter.name = { $regex: name as string, $options: 'i' };
  }

  // Location filtering
  if (city) filter['location.city'] = { $regex: city as string, $options: 'i' };
  if (state) filter['location.state'] = { $regex: state as string, $options: 'i' };
  if (country) filter['location.country'] = { $regex: country as string, $options: 'i' };
  if (latitude) filter['location.latitude'] = Number(latitude);
  if (longitude) filter['location.longitude'] = Number(longitude);

  // Amenities/Facilities filtering
  const amenitiesList = amenities || facilities;
  if (amenitiesList) {
    const parsedAmenities = typeof amenitiesList === 'string' ? amenitiesList.split(',') : amenitiesList;
    filter.amenities = { $in: parsedAmenities };
  }

  const result = await Neighbourhood.find(filter);
  return result;
};

const getNeighbourhoodByIdFromDB = async (id: string) => {
  const result = await Neighbourhood.findById(id);
  return result;
};

const updateNeighbourhoodInDB = async (id: string, payload: Partial<INeighbourhood>) => {
  // Support nested updates for location if provided
  const updatePayload: any = { ...payload };
  if (payload.location && Object.keys(payload.location).length > 0) {
    for (const [key, value] of Object.entries(payload.location)) {
      updatePayload[`location.${key}`] = value;
    }
    delete updatePayload.location;
  }

  const result = await Neighbourhood.findByIdAndUpdate(id, updatePayload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteNeighbourhoodFromDB = async (id: string) => {
  const result = await Neighbourhood.findByIdAndDelete(id);
  return result;
};

export const NeighbourhoodServices = {
  createNeighbourhoodIntoDB,
  getAllNeighbourhoodsFromDB,
  getNeighbourhoodByIdFromDB,
  updateNeighbourhoodInDB,
  deleteNeighbourhoodFromDB,
};
