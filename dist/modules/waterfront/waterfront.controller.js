"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterfrontControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const waterfront_service_1 = require("./waterfront.service");
const createWaterfront = (0, catchAsync_1.default)(async (req, res) => {
    const result = await waterfront_service_1.WaterfrontServices.createWaterfrontIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Waterfront property created successfully',
        data: result,
    });
});
const getAllWaterfronts = (0, catchAsync_1.default)(async (req, res) => {
    const result = await waterfront_service_1.WaterfrontServices.getAllWaterfrontsFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Waterfront properties retrieved successfully',
        data: result,
    });
});
const getWaterfrontById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await waterfront_service_1.WaterfrontServices.getWaterfrontByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Waterfront property retrieved successfully',
        data: result,
    });
});
const updateWaterfront = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await waterfront_service_1.WaterfrontServices.updateWaterfrontInDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Waterfront property updated successfully',
        data: result,
    });
});
const deleteWaterfront = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await waterfront_service_1.WaterfrontServices.deleteWaterfrontFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Waterfront property deleted successfully',
        data: result,
    });
});
exports.WaterfrontControllers = {
    createWaterfront,
    getAllWaterfronts,
    getWaterfrontById,
    updateWaterfront,
    deleteWaterfront,
};
