import { z } from 'zod';

// Step 1: Basic Info validation
export const basicInfoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
});

// Step 2: Address validation
export const addressSchema = z.object({
  street: z.string().min(5, 'Street address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  zipcode: z.string().min(5, 'Zipcode must be at least 5 characters').max(10, 'Zipcode must be less than 10 characters'),
});

// Complete form validation
export const userFormSchema = basicInfoSchema.merge(addressSchema);

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
export type AddressFormData = z.infer<typeof addressSchema>;
export type UserFormData = z.infer<typeof userFormSchema>;

// Validation helper functions
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};
