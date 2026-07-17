import express from 'express';
import { DevelopmentControllers } from './development.controller';
import validateRequest from '../../middlewares/validateRequest';
import { DevelopmentValidation } from './development.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(DevelopmentValidation.createDevelopmentValidationSchema),
  DevelopmentControllers.createDevelopment
);

router.get('/', DevelopmentControllers.getAllDevelopments);

router.get('/:id', DevelopmentControllers.getDevelopmentById);

router.patch(
  '/:id',
  validateRequest(DevelopmentValidation.updateDevelopmentValidationSchema),
  DevelopmentControllers.updateDevelopment
);

router.delete('/:id', DevelopmentControllers.deleteDevelopment);

export default router;
