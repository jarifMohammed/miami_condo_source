"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const contact_service_1 = require("./contact.service");
const createContact = (0, catchAsync_1.default)(async (req, res) => {
    const result = await contact_service_1.ContactServices.createContactIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Contact request submitted successfully',
        data: result,
    });
});
const getAllContacts = (0, catchAsync_1.default)(async (req, res) => {
    const result = await contact_service_1.ContactServices.getAllContactsFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Contact requests retrieved successfully',
        data: result,
    });
});
const getContactById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await contact_service_1.ContactServices.getContactByIdFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Contact request retrieved successfully',
        data: result,
    });
});
const updateContact = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await contact_service_1.ContactServices.updateContactInDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Contact request updated successfully',
        data: result,
    });
});
const deleteContact = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await contact_service_1.ContactServices.deleteContactFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Contact request deleted successfully',
        data: result,
    });
});
exports.ContactControllers = {
    createContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact,
};
