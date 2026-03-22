import axiosInstance from '../api/axiosInstance';
import { Booking, BookingRequest } from '../types/booking.types';

const bookingService = {
  getBookings: async (): Promise<Booking[]> => {
    const response = await axiosInstance.get('/bookings');
    return response.data;
  },

  getBookingById: async (id: string): Promise<Booking> => {
    const response = await axiosInstance.get(`/bookings/${id}`);
    return response.data;
  },

  createBooking: async (bookingData: BookingRequest): Promise<Booking> => {
    const response = await axiosInstance.post('/bookings', bookingData);
    return response.data;
  },

  updateBooking: async (id: string, bookingData: any): Promise<Booking> => {
    const response = await axiosInstance.put(`/bookings/${id}`, bookingData);
    return response.data;
  },

  cancelBooking: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/bookings/${id}`);
  },
};

export default bookingService;
