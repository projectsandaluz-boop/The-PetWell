export interface Pet {
  id: string;
  name: string;
  type: 'Dog' | 'Cat' | 'Other';
  breed: string;
  age: string;
  ownerId: string;
  image?: string;
  weight?: string;
  gender?: string;
  healthRecords?: HealthRecord[];
}

export interface HealthRecord {
  id: string;
  petId: string;
  date: string;
  description: string;
  type: 'Vaccination' | 'Checkup' | 'Surgery' | 'Other';
}
