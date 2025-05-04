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
    console.error("Post error:", error.code || error.message);

    // Retry once if ECONNRESET
    if (error.code === "ECONNRESET") {
      try {
        console.log("Retrying post...");
        const response: TAPIResponce<T> = await axiosInstance.post(url, data);
        if (isSuccessResponse(response)) return response.data;
      } catch (retryError) {
        console.error("Retry failed:", retryError);
      }
    }
  }
}
