import axiosInstance from '../api/axiosInstance';
import { Pet } from '../types/pet.types';

const petService = {
  getPets: async (): Promise<Pet[]> => {
    const response = await axiosInstance.get('/pets');
    return response.data;
  },

  getPetById: async (id: string): Promise<Pet> => {
    const response = await axiosInstance.get(`/pets/${id}`);
    return response.data;
  },

  addPet: async (petData: any): Promise<Pet> => {
    const response = await axiosInstance.post('/pets', petData);
    return response.data;
  },

  updatePet: async (id: string, petData: any): Promise<Pet> => {
    const response = await axiosInstance.put(`/pets/${id}`, petData);
    return response.data;
  },

  deletePet: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/pets/${id}`);
  },
};

export default petService;
