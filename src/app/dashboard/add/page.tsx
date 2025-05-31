'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserFormProvider, useUserForm } from '@/context/UserFormContext';
import FormNavigation from '@/components/AddUser/FormNavigation';
import StepOne from '@/components/AddUser/StepOne';
import StepTwo from '@/components/AddUser/StepTwo';
import StepThree from '@/components/AddUser/StepThree';

const AddUserForm: React.FC = () => {
  const { currentStep, nextStep, prevStep } = useUserForm();
  const router = useRouter();

  const handleFormSubmit = () => {
    // Navigate back to dashboard after successful submission
    router.push('/dashboard');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onNext={nextStep} />;
      case 2:
        return <StepTwo onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <StepThree onPrev={prevStep} onSubmit={handleFormSubmit} />;
      default:
        return <StepOne onNext={nextStep} />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Add New User
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Create a new user account with basic information and address details
          </p>
        </div>
        
        <Link href="/dashboard">
          <motion.button
            className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Dashboard</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          {/* Form Navigation */}
          <FormNavigation currentStep={currentStep} totalSteps={3} />
          
          {/* Form Steps */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default function AddUserPage() {
  return (
    <UserFormProvider>
      <AddUserForm />
    </UserFormProvider>
  );
}
