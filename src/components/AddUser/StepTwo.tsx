'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addressSchema, AddressFormData } from '@/utils/validators';
import { useUserForm } from '@/context/UserFormContext';

interface StepTwoProps {
  onNext: () => void;
  onPrev: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onNext, onPrev }) => {
  const { formData, updateFormData } = useUserForm();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      street: formData.street,
      city: formData.city,
      zipcode: formData.zipcode,
    },
    mode: 'onChange',
  });

  const onSubmit = (data: AddressFormData) => {
    updateFormData(data);
    onNext();
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
          Address Information
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please provide your address details
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="street" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Street Address *
          </label>
          <input
            {...register('street')}
            type="text"
            id="street"
            className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
              errors.street ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            placeholder="Enter your street address"
          />
          {errors.street && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-600 dark:text-red-400"
            >
              {errors.street.message}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              City *
            </label>
            <input
              {...register('city')}
              type="text"
              id="city"
              className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                errors.city ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="Enter your city"
            />
            {errors.city && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-600 dark:text-red-400"
              >
                {errors.city.message}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Zip Code *
            </label>
            <input
              {...register('zipcode')}
              type="text"
              id="zipcode"
              className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                errors.zipcode ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="Enter zip code"
            />
            {errors.zipcode && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-600 dark:text-red-400"
              >
                {errors.zipcode.message}
              </motion.p>
            )}
          </div>
        </div>

        <div className="flex space-x-4">
          <motion.button
            type="button"
            onClick={onPrev}
            className="flex-1 py-3 px-6 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Back
          </motion.button>
          
          <motion.button
            type="submit"
            disabled={!isValid}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
              isValid
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
            whileHover={isValid ? { scale: 1.02 } : {}}
            whileTap={isValid ? { scale: 0.98 } : {}}
          >
            Review & Confirm
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default StepTwo;
