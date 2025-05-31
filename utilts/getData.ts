import axiosInstance from '@/api/api';
import isSuccessResponse from '@/types/isSuccessResponse';
import { TAPIResponce } from '@/types/types';

export default async function getData<T>(url: string): Promise<T | null> {
  try {
    const response: TAPIResponce<T> = await axiosInstance.get(url, { timeout: 15000 });

    if (isSuccessResponse(response)) {
      return response.data;
    } else {
      console.error("Error: Unknown response structure");
      return null;
    }
  } catch (error: any) {
    const errorCode = error.code || error.message;


    // Retry once if connection was aborted or reset
    if (errorCode === "ECONNRESET" || errorCode === "ECONNABORTED") {
      try {
        console.log("Retrying fetch...");
        const response: TAPIResponce<T> = await axiosInstance.get(url);
        if (isSuccessResponse(response)) return response.data;
      } catch (retryError) {
        console.log("Retry failed:", retryError);
      }
    }

    return null;
  }
}
