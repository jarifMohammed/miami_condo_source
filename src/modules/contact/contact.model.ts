import { Schema, model } from 'mongoose';
import { IContact, EContactStatus } from './contact.interface';

const contactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true },
    budget: { type: String, required: true },
    primaryGoal: { type: String, required: true },
    timeline: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(EContactStatus),
      default: EContactStatus.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

contactSchema.index({ status: 1 });
contactSchema.index({ email: 1 });

export const Contact = model<IContact>('Contact', contactSchema);
