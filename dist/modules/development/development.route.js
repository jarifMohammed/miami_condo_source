"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const development_controller_1 = require("./development.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const development_validation_1 = require("./development.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(development_validation_1.DevelopmentValidation.createDevelopmentValidationSchema), development_controller_1.DevelopmentControllers.createDevelopment);
router.get('/', development_controller_1.DevelopmentControllers.getAllDevelopments);
router.get('/:id', development_controller_1.DevelopmentControllers.getDevelopmentById);
router.patch('/:id', (0, validateRequest_1.default)(development_validation_1.DevelopmentValidation.updateDevelopmentValidationSchema), development_controller_1.DevelopmentControllers.updateDevelopment);
router.delete('/:id', development_controller_1.DevelopmentControllers.deleteDevelopment);
exports.default = router;
