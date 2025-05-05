import axiosInstance from '@/api/api';
import isSuccessResponse from '@/types/isSuccessResponse';
import { TAPIResponce } from '@/types/types';

export default async function postData<T, D = any>(url: string, data?: D) {
  try {
    const response: TAPIResponce<T> = await axiosInstance.post(url, data);

    if (isSuccessResponse(response)) {
      return response.data;
    } else {
      console.error("Error: Unknown response structure");
    }
  } catch (error: any) {
    if (error.response) {
      console.error("Post error:", error.response.status, error.response.data);
    } else {
      console.error("Post error:", error.code || error.message);
    }
  }
}
