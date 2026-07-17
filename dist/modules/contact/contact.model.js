"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const contact_interface_1 = require("./contact.interface");
const contactSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true },
    budget: { type: String, required: true },
    primaryGoal: { type: String, required: true },
    timeline: { type: String, required: true },
    message: { type: String, required: true },
    status: {
        type: String,
        enum: Object.values(contact_interface_1.EContactStatus),
        default: contact_interface_1.EContactStatus.PENDING,
    },
}, {
    timestamps: true,
});
contactSchema.index({ status: 1 });
contactSchema.index({ email: 1 });
exports.Contact = (0, mongoose_1.model)('Contact', contactSchema);
