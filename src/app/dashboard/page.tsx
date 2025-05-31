'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useFetchUsers } from '@/hooks/useFetchUsers';
import UserCard from '@/components/Dashboard/UserCard';
import SearchBar from '@/components/Dashboard/SearchBar';
import Loader from '@/components/common/Loader';

export default function Dashboard() {
  const { users, loading, error, refetch } = useFetchUsers();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter users based on search query
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return users;
    
    const query = searchQuery.toLowerCase();
    return users.filter(user => 
      user.name.toLowerCase().includes(query) ||
      user.address.city.toLowerCase().includes(query)
    );
  }, [users, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (loading) {
    return <Loader size="lg" text="Loading users..." />;
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
          <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
            Error Loading Users
          </h3>
          <p className="text-red-600 dark:text-red-300 mb-4">
            {error}
          </p>
          <motion.button
            onClick={refetch}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            User Management Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and view all users in your system
          </p>
        </div>
        
        <Link href="/dashboard/add">
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add New User</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Search and Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <SearchBar onSearch={handleSearch} />
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
          <span>
            Showing {filteredUsers.length} of {users.length} users
          </span>
          {searchQuery && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
            >
              Filtered
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Users Grid */}
      <AnimatePresence mode="wait">
        {filteredUsers.length === 0 ? (
          <motion.div
            key="no-users"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {searchQuery ? 'No users found' : 'No users available'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {searchQuery 
                ? `No users match "${searchQuery}". Try a different search term.`
                : 'There are no users to display at the moment.'
              }
            </p>
            {searchQuery && (
              <motion.button
                onClick={() => setSearchQuery('')}
                className="text-blue-600 dark:text-blue-400 hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                Clear search
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="users-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredUsers.map((user, index) => (
              <UserCard key={user.id} user={user} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
