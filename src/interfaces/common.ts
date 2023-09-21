export type IGenericResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: any;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: {
    path: string;
    message: string;
  }[];
};
