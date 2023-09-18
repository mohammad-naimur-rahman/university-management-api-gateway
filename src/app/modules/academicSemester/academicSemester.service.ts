import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/academic-semesters', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/academic-semesters/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateOneIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const {
    body,
    params: { id }
  } = req;
  const response: IGenericResponse = await CoreService.patch(`/academic-semesters/${id}`, body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(`/academic-semesters/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneIntoDB,
  deleteByIdFromDB
};
