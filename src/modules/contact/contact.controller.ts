import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { ContactServices } from './contact.service';

const createContact = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactServices.createContactIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Contact request submitted successfully',
    data: result,
  });
});

const getAllContacts = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactServices.getAllContactsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact requests retrieved successfully',
    data: result,
  });
});

const getContactById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ContactServices.getContactByIdFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact request retrieved successfully',
    data: result,
  });
});

const updateContact = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ContactServices.updateContactInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact request updated successfully',
    data: result,
  });
});

const deleteContact = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ContactServices.deleteContactFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact request deleted successfully',
    data: result,
  });
});

export const ContactControllers = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};
