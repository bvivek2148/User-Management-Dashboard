'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserFormData } from '@/utils/validators';

interface UserFormContextType {
  formData: UserFormData;
  currentStep: number;
  updateFormData: (data: Partial<UserFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetForm: () => void;
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
}

const UserFormContext = createContext<UserFormContextType | undefined>(undefined);

const initialFormData: UserFormData = {
  name: '',
  email: '',
  street: '',
  city: '',
  zipcode: '',
};

interface UserFormProviderProps {
  children: ReactNode;
}

export const UserFormProvider: React.FC<UserFormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<UserFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (data: Partial<UserFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    localStorage.removeItem('userFormData');
    localStorage.removeItem('userFormStep');
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('userFormData', JSON.stringify(formData));
    localStorage.setItem('userFormStep', currentStep.toString());
  };

  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem('userFormData');
    const savedStep = localStorage.getItem('userFormStep');
    
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
  };

  // Auto-save to localStorage when form data changes
  useEffect(() => {
    saveToLocalStorage();
  }, [formData, currentStep]);

  // Load from localStorage on mount
  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const value: UserFormContextType = {
    formData,
    currentStep,
    updateFormData,
    nextStep,
    prevStep,
    resetForm,
    saveToLocalStorage,
    loadFromLocalStorage,
  };

  return (
    <UserFormContext.Provider value={value}>
      {children}
    </UserFormContext.Provider>
  );
};

export const useUserForm = (): UserFormContextType => {
  const context = useContext(UserFormContext);
  if (context === undefined) {
    throw new Error('useUserForm must be used within a UserFormProvider');
  }
  return context;
};
