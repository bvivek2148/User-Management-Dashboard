import axios from 'axios';
import { User } from '@/types/user';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get<User[]>('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
};

export default api;
