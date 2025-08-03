import axios, { AxiosError } from 'axios';
import type { ApiError, ApiResponse, ApiSuccess } from './types';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;


export  const handleApiResponse=async<T>(apiCall: () => Promise<{ data: T }>): Promise<ApiResponse<T>>=> {
    try {
        const response = await apiCall();
        const success: ApiSuccess<T> = {
            status: 'success',
            data: response.data,
            message: 'Request successful',
        };
        return success;
    } catch (err) {
        const error = err as AxiosError<any>;
        const apiError: ApiError = {
            status: 'error',
            message:
                error?.response?.data?.message || 'An unexpected error occurred.',
            errorCode: error?.response?.data?.code,
            details: error?.response?.data?.errors,
        };
        return apiError;
    }
}
