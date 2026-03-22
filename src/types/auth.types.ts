export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'owner' | 'admin';
  avatarUrl?: string;
  age?: number;
  address?: string;
  contact?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface RegisterRequest {
  email: string;
  password?: string;
  fullName: string;
  agencyName?: string;
}
