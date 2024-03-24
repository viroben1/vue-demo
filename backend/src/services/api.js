// eslint-disable-next-line no-undef
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api', // Replace with your actual API base URL
    timeout: 5000, // Set a timeout for requests (optional)
  });
  
  export const getPrivacyPolicyData = async () => {
    try {
      const response = await axiosInstance.get('/pages/privacy-policy');
      return response.data;
    } catch (error) {
      console.error('Error fetching privacy policy data:', error);
      throw error;
    }
  };
  
  export const getDynamicData = async () => {
    try {
      const response = await axiosInstance.get('/dynamicData');
      return response.data;
    } catch (error) {
      console.error('Error fetching dynamic data:', error);
      throw error;
    }
  };
  