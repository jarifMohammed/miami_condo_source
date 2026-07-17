"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactValidation = void 0;
const zod_1 = require("zod");
const contact_interface_1 = require("./contact.interface");
const createContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        email: zod_1.z.string({ required_error: 'Email is required' }).email('Invalid email address'),
        phoneNumber: zod_1.z.string({ required_error: 'Phone number is required' }),
        budget: zod_1.z.string({ required_error: 'Budget is required' }),
        primaryGoal: zod_1.z.string({ required_error: 'Primary goal is required' }),
        timeline: zod_1.z.string({ required_error: 'Timeline is required' }),
        message: zod_1.z.string({ required_error: 'Message is required' }),
        status: zod_1.z.nativeEnum(contact_interface_1.EContactStatus).optional(),
    }),
});
const updateContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email('Invalid email address').optional(),
        phoneNumber: zod_1.z.string().optional(),
        budget: zod_1.z.string().optional(),
        primaryGoal: zod_1.z.string().optional(),
        timeline: zod_1.z.string().optional(),
        message: zod_1.z.string().optional(),
        status: zod_1.z.nativeEnum(contact_interface_1.EContactStatus).optional(),
    }),
});
exports.ContactValidation = {
    createContactValidationSchema,
    updateContactValidationSchema,
};
