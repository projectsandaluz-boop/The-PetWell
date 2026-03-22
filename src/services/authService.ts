import axiosInstance from '../api/axiosInstance';
import { AuthResponse, User, RegisterRequest } from '../types/auth.types';

const authService = {
  login: async (credentials: any): Promise<AuthResponse> => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  },

  register: async (userData: RegisterRequest): Promise<AuthResponse> => {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  },

  getProfile: async (): Promise<User> => {
    const response = await axiosInstance.get('/auth/profile');
    return response.data;
  },

  updateProfile: async (profileData: any): Promise<User> => {
    const response = await axiosInstance.put('/auth/profile', profileData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    window.location.href = '/owner-login';
  },
};

export default authService;
