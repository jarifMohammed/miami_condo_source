import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { AnalyticsServices } from './analytics.service';

const getAnalytics = catchAsync(async (req: Request, res: Response) => {
  const result = await AnalyticsServices.getAnalyticsData();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Analytics data retrieved successfully',
    data: result,
  });
});

export const AnalyticsControllers = {
  getAnalytics,
};
