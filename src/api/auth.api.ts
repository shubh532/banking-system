import axiosInstance, { handleApiResponse } from "./axios";
import type { ApiResponse } from "./types";

export interface LoginPayload {
    mobileOrEmail: string;
    password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  mobile: string;
  address: string; 
  documentType: string;
  password:string;
}

const API_ENDPOINTS = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
};

export const login = async (payload: LoginPayload): Promise<ApiResponse<any>> => {
    return handleApiResponse(() => axiosInstance.post<any>(API_ENDPOINTS.LOGIN, payload));
};

export const register = async (payload: RegisterPayload): Promise<ApiResponse<any>> => {
    return handleApiResponse(() => axiosInstance.post(API_ENDPOINTS.REGISTER, payload));
};

export const logout = async (): Promise<ApiResponse<any>> => {
    return handleApiResponse(() => axiosInstance.post(API_ENDPOINTS.LOGOUT));
};
