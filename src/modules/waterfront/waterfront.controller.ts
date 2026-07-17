import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { WaterfrontServices } from './waterfront.service';

const createWaterfront = catchAsync(async (req: Request, res: Response) => {
  const result = await WaterfrontServices.createWaterfrontIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Waterfront property created successfully',
    data: result,
  });
});

const getAllWaterfronts = catchAsync(async (req: Request, res: Response) => {
  const result = await WaterfrontServices.getAllWaterfrontsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Waterfront properties retrieved successfully',
    data: result,
  });
});

const getWaterfrontById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await WaterfrontServices.getWaterfrontByIdFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Waterfront property retrieved successfully',
    data: result,
  });
});

const updateWaterfront = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await WaterfrontServices.updateWaterfrontInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Waterfront property updated successfully',
    data: result,
  });
});

const deleteWaterfront = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await WaterfrontServices.deleteWaterfrontFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Waterfront property deleted successfully',
    data: result,
  });
});

export const WaterfrontControllers = {
  createWaterfront,
  getAllWaterfronts,
  getWaterfrontById,
  updateWaterfront,
  deleteWaterfront,
};
