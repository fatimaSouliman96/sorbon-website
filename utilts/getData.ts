import axiosInstance from '@/api/api';
import isSuccessResponse from '@/types/isSuccessResponse';
import { TAPIResponce } from '@/types/types';

export default async function getData<T>(url: string){
  try {
    const response: TAPIResponce<T> = await axiosInstance.get(url);
    if (isSuccessResponse(response)) {
      return response.data;
    } else {
      console.error("Error: Unknown response structure");
    }
  } catch (error: any) {
    console.error("Fetch error:", error.code || error.message);
    
    // Retry once if ECONNRESET
    if (error.code === "ECONNRESET") {
      try {
        console.log("Retrying fetch...");
        const response: TAPIResponce<T> = await axiosInstance.get(url);
        if (isSuccessResponse(response)) return response.data;
      } catch (retryError) {
        console.error("Retry failed:", retryError);
      }
    }
  }
}
