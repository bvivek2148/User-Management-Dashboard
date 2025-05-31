export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface NewUser {
  name: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
}

export interface FormStep {
  step: number;
  isValid: boolean;
}

export interface UserFormData {
  // Step 1: Basic Info
  name: string;
  email: string;
  
  // Step 2: Address
  street: string;
  city: string;
  zipcode: string;
}
