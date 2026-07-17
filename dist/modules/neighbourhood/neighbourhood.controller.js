"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeighbourhoodControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const neighbourhood_service_1 = require("./neighbourhood.service");
const createNeighbourhood = (0, catchAsync_1.default)(async (req, res) => {
    const result = await neighbourhood_service_1.NeighbourhoodServices.createNeighbourhoodIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Neighbourhood created successfully',
        data: result,
    });
});
const getAllNeighbourhoods = (0, catchAsync_1.default)(async (req, res) => {
    const result = await neighbourhood_service_1.NeighbourhoodServices.getAllNeighbourhoodsFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Neighbourhoods retrieved successfully',
        data: result,
    });
});
const getNeighbourhoodById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await neighbourhood_service_1.NeighbourhoodServices.getNeighbourhoodByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Neighbourhood retrieved successfully',
        data: result,
    });
});
const updateNeighbourhood = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await neighbourhood_service_1.NeighbourhoodServices.updateNeighbourhoodInDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Neighbourhood updated successfully',
        data: result,
    });
});
const deleteNeighbourhood = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await neighbourhood_service_1.NeighbourhoodServices.deleteNeighbourhoodFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Neighbourhood deleted successfully',
        data: result,
    });
});
exports.NeighbourhoodControllers = {
    createNeighbourhood,
    getAllNeighbourhoods,
    getNeighbourhoodById,
    updateNeighbourhood,
    deleteNeighbourhood,
};
