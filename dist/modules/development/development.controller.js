"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopmentControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const development_service_1 = require("./development.service");
const createDevelopment = (0, catchAsync_1.default)(async (req, res) => {
    const result = await development_service_1.DevelopmentServices.createDevelopmentIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Development created successfully',
        data: result,
    });
});
const getAllDevelopments = (0, catchAsync_1.default)(async (req, res) => {
    const result = await development_service_1.DevelopmentServices.getAllDevelopmentsFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Developments retrieved successfully',
        data: result,
    });
});
const getDevelopmentById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await development_service_1.DevelopmentServices.getDevelopmentByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Development retrieved successfully',
        data: result,
    });
});
const updateDevelopment = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await development_service_1.DevelopmentServices.updateDevelopmentInDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Development updated successfully',
        data: result,
    });
});
const deleteDevelopment = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await development_service_1.DevelopmentServices.deleteDevelopmentFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Development deleted successfully',
        data: result,
    });
});
exports.DevelopmentControllers = {
    createDevelopment,
    getAllDevelopments,
    getDevelopmentById,
    updateDevelopment,
    deleteDevelopment,
};
