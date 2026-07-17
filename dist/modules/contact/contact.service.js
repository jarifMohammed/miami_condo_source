"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactServices = void 0;
const contact_model_1 = require("./contact.model");
const sendEmail_1 = require("../../utils/sendEmail");
const createContactIntoDB = async (payload) => {
    const result = await contact_model_1.Contact.create(payload);
    // Trigger email notification to Admin
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const emailSubject = `New Contact Form Submission from ${payload.name}`;
    const emailHtml = `
    <h2>New Contact Request</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phoneNumber}</p>
    <p><strong>Budget:</strong> ${payload.budget}</p>
    <p><strong>Primary Goal:</strong> ${payload.primaryGoal}</p>
    <p><strong>Timeline:</strong> ${payload.timeline}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message}</p>
  `;
    // We can catch and swallow email errors so we don't break the user experience if SMTP fails
    (0, sendEmail_1.sendEmail)(adminEmail, emailSubject, emailHtml).catch(console.error);
    return result;
};
const getAllContactsFromDB = async (query) => {
    const { status } = query;
    const filter = {};
    if (status) {
        filter.status = status;
    }
    const result = await contact_model_1.Contact.find(filter).sort({ createdAt: -1 });
    return result;
};
const getContactByIdFromDB = async (id) => {
    const result = await contact_model_1.Contact.findById(id);
    return result;
};
const updateContactInDB = async (id, payload) => {
    const result = await contact_model_1.Contact.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteContactFromDB = async (id) => {
    const result = await contact_model_1.Contact.findByIdAndDelete(id);
    return result;
};
exports.ContactServices = {
    createContactIntoDB,
    getAllContactsFromDB,
    getContactByIdFromDB,
    updateContactInDB,
    deleteContactFromDB,
};
