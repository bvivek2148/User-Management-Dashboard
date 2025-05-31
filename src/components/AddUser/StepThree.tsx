'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUserForm } from '@/context/UserFormContext';
import toast from 'react-hot-toast';

interface StepThreeProps {
  onPrev: () => void;
  onSubmit: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onPrev, onSubmit }) => {
  const { formData, resetForm } = useUserForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log the data to console as required
      console.log('New User Data:', formData);
      
      // Show success toast
      toast.success('User added successfully!', {
        duration: 4000,
        position: 'top-center',
      });
      
      // Reset form and call onSubmit
      resetForm();
      onSubmit();
      
    } catch (error) {
      toast.error('Failed to add user. Please try again.', {
        duration: 4000,
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Review & Confirm
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please review your information before submitting
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Basic Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Full Name
                </label>
                <p className="text-gray-900 dark:text-white font-medium">
                  {formData.name}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Email Address
                </label>
                <p className="text-gray-900 dark:text-white font-medium">
                  {formData.email}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Address Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Street Address
                </label>
                <p className="text-gray-900 dark:text-white font-medium">
                  {formData.street}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                    City
                  </label>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {formData.city}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                    Zip Code
                  </label>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {formData.zipcode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <motion.button
          type="button"
          onClick={onPrev}
          disabled={isSubmitting}
          className="flex-1 py-3 px-6 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          Back
        </motion.button>
        
        <motion.button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="flex-1 py-3 px-6 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              Submitting...
            </div>
          ) : (
            'Submit User'
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StepThree;
