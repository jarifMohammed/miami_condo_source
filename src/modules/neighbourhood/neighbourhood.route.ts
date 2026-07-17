import express from 'express';
import { NeighbourhoodControllers } from './neighbourhood.controller';
import validateRequest from '../../middlewares/validateRequest';
import { NeighbourhoodValidation } from './neighbourhood.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(NeighbourhoodValidation.createNeighbourhoodValidationSchema),
  NeighbourhoodControllers.createNeighbourhood
);

router.get('/', NeighbourhoodControllers.getAllNeighbourhoods);

router.get('/:id', NeighbourhoodControllers.getNeighbourhoodById);

router.patch(
  '/:id',
  validateRequest(NeighbourhoodValidation.updateNeighbourhoodValidationSchema),
  NeighbourhoodControllers.updateNeighbourhood
);

router.delete('/:id', NeighbourhoodControllers.deleteNeighbourhood);

export default router;
