// import { baseUrl } from '@/constants/baseUrl';

import { baseUrl } from '@/constant/baseUrl';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Accept": "application/json"
  }
});

export default axiosInstance;