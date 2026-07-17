"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECurrentStage = exports.EResidenceStatus = exports.ECategory = exports.EConstructionStage = void 0;
var EConstructionStage;
(function (EConstructionStage) {
    EConstructionStage["PRE_CONSTRUCTION"] = "pre-construction";
    EConstructionStage["UNDER_CONSTRUCTION"] = "under construction";
    EConstructionStage["MOVE_IN_READY"] = "move in ready";
})(EConstructionStage || (exports.EConstructionStage = EConstructionStage = {}));
var ECategory;
(function (ECategory) {
    ECategory["WATERFRONT"] = "waterfront";
    ECategory["LUXURY"] = "luxury";
})(ECategory || (exports.ECategory = ECategory = {}));
var EResidenceStatus;
(function (EResidenceStatus) {
    EResidenceStatus["AVAILABLE"] = "available";
    EResidenceStatus["SOLD"] = "sold";
})(EResidenceStatus || (exports.EResidenceStatus = EResidenceStatus = {}));
var ECurrentStage;
(function (ECurrentStage) {
    ECurrentStage["PLANNING"] = "planning";
    ECurrentStage["FOUNDATION"] = "foundation";
    ECurrentStage["STRUCTURE_EXTERIOR"] = "structure exterior";
    ECurrentStage["INTERIOR_FINISHING"] = "interior finishing";
    ECurrentStage["COMPLETED"] = "completed";
})(ECurrentStage || (exports.ECurrentStage = ECurrentStage = {}));
