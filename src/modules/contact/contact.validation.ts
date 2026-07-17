import { z } from 'zod';
import { EContactStatus } from './contact.interface';

const createContactValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }).email('Invalid email address'),
    phoneNumber: z.string({ required_error: 'Phone number is required' }),
    budget: z.string({ required_error: 'Budget is required' }),
    primaryGoal: z.string({ required_error: 'Primary goal is required' }),
    timeline: z.string({ required_error: 'Timeline is required' }),
    message: z.string({ required_error: 'Message is required' }),
    status: z.nativeEnum(EContactStatus).optional(),
  }),
});

const updateContactValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email('Invalid email address').optional(),
    phoneNumber: z.string().optional(),
    budget: z.string().optional(),
    primaryGoal: z.string().optional(),
    timeline: z.string().optional(),
    message: z.string().optional(),
    status: z.nativeEnum(EContactStatus).optional(),
  }),
});

export const ContactValidation = {
  createContactValidationSchema,
  updateContactValidationSchema,
};
