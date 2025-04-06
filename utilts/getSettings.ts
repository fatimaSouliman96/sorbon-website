import axiosInstance from "@/api/api";
import isSuccessResponse from "@/types/isSuccessResponse";
import {  settingsData, TAPIResponce } from "@/types/types";

export default async function getSettings() {

    try {
    

      
      const response: TAPIResponce<settingsData>  = await axiosInstance.get(`/settings`);
      
      if (isSuccessResponse(response)) {
        return response;
      } else {
        console.error("Error:", response.message || "Unknown error");
      }
    } catch (error) {
      console.error("An error occurred while fetching categories:", error);
    }
  
  }