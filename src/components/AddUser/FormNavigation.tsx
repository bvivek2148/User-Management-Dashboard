'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
}

const FormNavigation: React.FC<FormNavigationProps> = ({ currentStep, totalSteps }) => {
  const steps = [
    { number: 1, title: 'Basic Info', description: 'Name & Email' },
    { number: 2, title: 'Address', description: 'Location Details' },
    { number: 3, title: 'Review', description: 'Confirm & Submit' },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step Circle */}
            <motion.div
              className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                step.number <= currentStep
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: step.number === currentStep ? 1.1 : 1,
                backgroundColor: step.number <= currentStep ? '#2563eb' : undefined
              }}
              transition={{ duration: 0.3 }}
            >
              {step.number < currentStep ? (
                <motion.svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              ) : (
                <span className="text-sm font-semibold">{step.number}</span>
              )}
            </motion.div>

            {/* Step Info */}
            <div className="ml-3 hidden sm:block">
              <p className={`text-sm font-medium ${
                step.number <= currentStep
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {step.title}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {step.description}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <motion.div
                className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                  step.number < currentStep
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: step.number < currentStep ? 1 : 0.3,
                  backgroundColor: step.number < currentStep ? '#2563eb' : undefined
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
          <span>Progress</span>
          <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </div>
  );
};

export default FormNavigation;
