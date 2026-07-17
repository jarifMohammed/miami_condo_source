import express from 'express';
import { WaterfrontControllers } from './waterfront.controller';
import validateRequest from '../../middlewares/validateRequest';
import { WaterfrontValidation } from './waterfront.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(WaterfrontValidation.createWaterfrontValidationSchema),
  WaterfrontControllers.createWaterfront
);

router.get('/', WaterfrontControllers.getAllWaterfronts);

router.get('/:id', WaterfrontControllers.getWaterfrontById);

router.patch(
  '/:id',
  validateRequest(WaterfrontValidation.updateWaterfrontValidationSchema),
  WaterfrontControllers.updateWaterfront
);

router.delete('/:id', WaterfrontControllers.deleteWaterfront);

export default router;
