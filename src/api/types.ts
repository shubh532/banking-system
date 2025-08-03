export interface ApiError {
  status: 'error';
  message: string;
  errorCode?: string;
  details?: any;
}

export interface ApiSuccess<T = any> {
  status: 'success';
  message?: string;
  data: T;
}

export type ApiResponse<T = any> = ApiSuccess<T> | ApiError;
