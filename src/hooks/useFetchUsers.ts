import { useState, useEffect } from 'react';
import { User } from '@/types/user';
import { fetchUsers } from '@/lib/api';

interface UseFetchUsersReturn {
  users: User[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useFetchUsers = (): UseFetchUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const userData = await fetchUsers();
      setUsers(userData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const refetch = () => {
    loadUsers();
  };

  return {
    users,
    loading,
    error,
    refetch,
  };
};
