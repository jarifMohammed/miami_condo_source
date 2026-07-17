"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const waterfront_controller_1 = require("./waterfront.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const waterfront_validation_1 = require("./waterfront.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(waterfront_validation_1.WaterfrontValidation.createWaterfrontValidationSchema), waterfront_controller_1.WaterfrontControllers.createWaterfront);
router.get('/', waterfront_controller_1.WaterfrontControllers.getAllWaterfronts);
router.get('/:id', waterfront_controller_1.WaterfrontControllers.getWaterfrontById);
router.patch('/:id', (0, validateRequest_1.default)(waterfront_validation_1.WaterfrontValidation.updateWaterfrontValidationSchema), waterfront_controller_1.WaterfrontControllers.updateWaterfront);
router.delete('/:id', waterfront_controller_1.WaterfrontControllers.deleteWaterfront);
exports.default = router;
