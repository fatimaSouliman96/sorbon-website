import axiosInstance from '@/api/api';
import isSuccessResponse from '@/types/isSuccessResponse';
import { CategoriesData, TAPIResponce } from '@/types/types';

export default async function getCategory(page: number){

  try {
    const response: TAPIResponce<CategoriesData[]> = await axiosInstance.get(`/services/categories?page=${page}`);

    if (isSuccessResponse(response)) {
      return response;
    } else {
      console.error("Error:", "Unknown error");
    }
  } catch (error) {
    console.error("An error occurred while fetching categories:", error);
  }

}

