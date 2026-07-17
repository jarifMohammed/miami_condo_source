import { IContact } from './contact.interface';
import { Contact } from './contact.model';
import { sendEmail } from '../../utils/sendEmail';

const createContactIntoDB = async (payload: IContact) => {
  const result = await Contact.create(payload);

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
  sendEmail(adminEmail, emailSubject, emailHtml).catch(console.error);

  return result;
};

const getAllContactsFromDB = async (query: Record<string, unknown>) => {
  const { status } = query;

  const filter: Record<string, any> = {};

  if (status) {
    filter.status = status;
  }

  const result = await Contact.find(filter).sort({ createdAt: -1 });
  return result;
};

const getContactByIdFromDB = async (id: string) => {
  const result = await Contact.findById(id);
  return result;
};

const updateContactInDB = async (id: string, payload: Partial<IContact>) => {
  const result = await Contact.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteContactFromDB = async (id: string) => {
  const result = await Contact.findByIdAndDelete(id);
  return result;
};

export const ContactServices = {
  createContactIntoDB,
  getAllContactsFromDB,
  getContactByIdFromDB,
  updateContactInDB,
  deleteContactFromDB,
};
