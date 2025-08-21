export interface Pet {
  id: string;
  name: string;
  type: 'Dog' | 'Cat';
  breed: string;
  age: string;
  ageCategory: 'Puppy' | 'Young' | 'Adult' | 'Senior';
  size: 'Small' | 'Medium' | 'Large';
  gender: 'Male' | 'Female';
  description: string;
  personalityTraits: string[];
  images: string[];
}
