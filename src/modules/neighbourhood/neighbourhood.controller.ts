import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { NeighbourhoodServices } from './neighbourhood.service';

const createNeighbourhood = catchAsync(async (req: Request, res: Response) => {
  const result = await NeighbourhoodServices.createNeighbourhoodIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Neighbourhood created successfully',
    data: result,
  });
});

const getAllNeighbourhoods = catchAsync(async (req: Request, res: Response) => {
  const result = await NeighbourhoodServices.getAllNeighbourhoodsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Neighbourhoods retrieved successfully',
    data: result,
  });
});

const getNeighbourhoodById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await NeighbourhoodServices.getNeighbourhoodByIdFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Neighbourhood retrieved successfully',
    data: result,
  });
});

const updateNeighbourhood = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await NeighbourhoodServices.updateNeighbourhoodInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Neighbourhood updated successfully',
    data: result,
  });
});

const deleteNeighbourhood = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await NeighbourhoodServices.deleteNeighbourhoodFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Neighbourhood deleted successfully',
    data: result,
  });
});

export const NeighbourhoodControllers = {
  createNeighbourhood,
  getAllNeighbourhoods,
  getNeighbourhoodById,
  updateNeighbourhood,
  deleteNeighbourhood,
};
