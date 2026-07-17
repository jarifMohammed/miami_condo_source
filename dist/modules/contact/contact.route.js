"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const contact_validation_1 = require("./contact.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(contact_validation_1.ContactValidation.createContactValidationSchema), contact_controller_1.ContactControllers.createContact);
router.get('/', contact_controller_1.ContactControllers.getAllContacts);
router.get('/:id', contact_controller_1.ContactControllers.getContactById);
router.patch('/:id', (0, validateRequest_1.default)(contact_validation_1.ContactValidation.updateContactValidationSchema), contact_controller_1.ContactControllers.updateContact);
router.delete('/:id', contact_controller_1.ContactControllers.deleteContact);
exports.default = router;
