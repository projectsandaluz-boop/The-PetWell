import { useState, useEffect } from 'react';
import petService from '../services/petService';
import { Pet } from '../types/pet.types';

export const usePets = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPets = async () => {
    try {
      setLoading(true);
      const data = await petService.getPets();
      setPets(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch pets');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return { pets, loading, error, refreshPets: fetchPets };
};
