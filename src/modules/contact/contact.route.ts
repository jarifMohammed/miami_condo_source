import express from 'express';
import { ContactControllers } from './contact.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ContactValidation } from './contact.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ContactValidation.createContactValidationSchema),
  ContactControllers.createContact
);

router.get('/', ContactControllers.getAllContacts);

router.get('/:id', ContactControllers.getContactById);

router.patch(
  '/:id',
  validateRequest(ContactValidation.updateContactValidationSchema),
  ContactControllers.updateContact
);

router.delete('/:id', ContactControllers.deleteContact);

export default router;
