export interface Booking {
  id: string;
  petId: string;
  petName: string;
  service: string;
  date: string;
  time: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled' | 'Pending';
  ownerId: string;
  price: number;
  image?: string;
}

export interface BookingRequest {
  petId: string;
  service: string;
  date: string;
  time: string;
  paymentMethod: 'card' | 'cash';
}
