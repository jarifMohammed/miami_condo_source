"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const neighbourhood_controller_1 = require("./neighbourhood.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const neighbourhood_validation_1 = require("./neighbourhood.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(neighbourhood_validation_1.NeighbourhoodValidation.createNeighbourhoodValidationSchema), neighbourhood_controller_1.NeighbourhoodControllers.createNeighbourhood);
router.get('/', neighbourhood_controller_1.NeighbourhoodControllers.getAllNeighbourhoods);
router.get('/:id', neighbourhood_controller_1.NeighbourhoodControllers.getNeighbourhoodById);
router.patch('/:id', (0, validateRequest_1.default)(neighbourhood_validation_1.NeighbourhoodValidation.updateNeighbourhoodValidationSchema), neighbourhood_controller_1.NeighbourhoodControllers.updateNeighbourhood);
router.delete('/:id', neighbourhood_controller_1.NeighbourhoodControllers.deleteNeighbourhood);
exports.default = router;
