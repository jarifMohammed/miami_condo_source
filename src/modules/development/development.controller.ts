import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { DevelopmentServices } from './development.service';

const createDevelopment = catchAsync(async (req: Request, res: Response) => {
  const result = await DevelopmentServices.createDevelopmentIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Development created successfully',
    data: result,
  });
});

const getAllDevelopments = catchAsync(async (req: Request, res: Response) => {
  const result = await DevelopmentServices.getAllDevelopmentsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Developments retrieved successfully',
    data: result,
  });
});

const getDevelopmentById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DevelopmentServices.getDevelopmentByIdFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Development retrieved successfully',
    data: result,
  });
});

const updateDevelopment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DevelopmentServices.updateDevelopmentInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Development updated successfully',
    data: result,
  });
});

const deleteDevelopment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DevelopmentServices.deleteDevelopmentFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Development deleted successfully',
    data: result,
  });
});

export const DevelopmentControllers = {
  createDevelopment,
  getAllDevelopments,
  getDevelopmentById,
  updateDevelopment,
  deleteDevelopment,
};
