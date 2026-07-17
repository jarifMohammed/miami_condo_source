"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeighbourhoodServices = void 0;
const neighbourhood_model_1 = require("./neighbourhood.model");
const createNeighbourhoodIntoDB = async (payload) => {
    const result = await neighbourhood_model_1.Neighbourhood.create(payload);
    return result;
};
const getAllNeighbourhoodsFromDB = async (query) => {
    const { name, facilities, latitude, longitude, city, state, country, amenities, isFeatured } = query;
    const filter = {};
    if (isFeatured !== undefined) {
        filter.isFeatured = isFeatured === 'true' || isFeatured === true;
    }
    if (name) {
        filter.name = { $regex: name, $options: 'i' };
    }
    // Location filtering
    if (city)
        filter['location.city'] = { $regex: city, $options: 'i' };
    if (state)
        filter['location.state'] = { $regex: state, $options: 'i' };
    if (country)
        filter['location.country'] = { $regex: country, $options: 'i' };
    if (latitude)
        filter['location.latitude'] = Number(latitude);
    if (longitude)
        filter['location.longitude'] = Number(longitude);
    // Amenities/Facilities filtering
    const amenitiesList = amenities || facilities;
    if (amenitiesList) {
        const parsedAmenities = typeof amenitiesList === 'string' ? amenitiesList.split(',') : amenitiesList;
        filter.amenities = { $in: parsedAmenities };
    }
    const result = await neighbourhood_model_1.Neighbourhood.find(filter);
    return result;
};
const getNeighbourhoodByIdFromDB = async (id) => {
    const result = await neighbourhood_model_1.Neighbourhood.findById(id);
    return result;
};
const updateNeighbourhoodInDB = async (id, payload) => {
    // Support nested updates for location if provided
    const updatePayload = { ...payload };
    if (payload.location && Object.keys(payload.location).length > 0) {
        for (const [key, value] of Object.entries(payload.location)) {
            updatePayload[`location.${key}`] = value;
        }
        delete updatePayload.location;
    }
    const result = await neighbourhood_model_1.Neighbourhood.findByIdAndUpdate(id, updatePayload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteNeighbourhoodFromDB = async (id) => {
    const result = await neighbourhood_model_1.Neighbourhood.findByIdAndDelete(id);
    return result;
};
exports.NeighbourhoodServices = {
    createNeighbourhoodIntoDB,
    getAllNeighbourhoodsFromDB,
    getNeighbourhoodByIdFromDB,
    updateNeighbourhoodInDB,
    deleteNeighbourhoodFromDB,
};
