export interface Product {
  id: string;
  name: string;
  category: 'Food' | 'Toys' | 'Health' | 'Grooming' | 'Accessories';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  description?: string;
  stock?: number;
}

export interface Delivery {
  id: string;
  orderId: string;
  productName: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  address: string;
  trackingNumber?: string;
  image?: string;
}
