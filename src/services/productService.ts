import axiosInstance from '../api/axiosInstance';
import { Product, Delivery } from '../types/product.types';

const productService = {
  getProducts: async (category?: string): Promise<Product[]> => {
    const response = await axiosInstance.get('/products', {
      params: { category },
    });
    return response.data;
  },

  getProductById: async (id: string): Promise<Product> => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  },

  getDeliveries: async (): Promise<Delivery[]> => {
    const response = await axiosInstance.get('/deliveries');
    return response.data;
  },

  getDeliveryById: async (id: string): Promise<Delivery> => {
    const response = await axiosInstance.get(`/deliveries/${id}`);
    return response.data;
  },

  createOrder: async (orderData: any): Promise<any> => {
    const response = await axiosInstance.post('/orders', orderData);
    return response.data;
  },
};

export default productService;
