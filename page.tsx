'use client';

import { useState } from 'react';
import PetCard from '@/components/PetCard';
import { pets as allPets } from '@/lib/mockData';
import type { Pet } from '@/lib/types';

const speciesOptions = ['All', 'Dog', 'Cat', 'Rabbit'];
const ageOptions = ['All', 'Puppy/Kitten', 'Young', 'Adult', 'Senior'];
const sizeOptions = ['All', 'Small', 'Medium', 'Large'];

export default function PetsPage() {
  const [pets, setPets] = useState<Pet[]>(allPets);
  const [filters, setFilters] = useState({
    species: 'All',
    age: 'All',
    size: 'All',
  });

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    let filteredPets = allPets;

    if (newFilters.species !== 'All') {
      filteredPets = filteredPets.filter(pet => pet.species === newFilters.species);
    }
    if (newFilters.age !== 'All') {
      filteredPets = filteredPets.filter(pet => pet.age.group === newFilters.age);
    }
    if (newFilters.size !== 'All') {
      filteredPets = filteredPets.filter(pet => pet.size === newFilters.size);
    }

    setPets(filteredPets);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">Meet Your New Best Friend</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Filter Pets</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="species" className="block text-sm font-medium text-gray-700">Species</label>
              <select id="species" name="species" onChange={(e) => handleFilterChange('species', e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md">
                {speciesOptions.map(option => <option key={option}>{option}</option>)
              }
              </select>
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <select id="age" name="age" onChange={(e) => handleFilterChange('age', e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md">
                {ageOptions.map(option => <option key={option}>{option}</option>)
              }
              </select>
            </div>
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
              <select id="size" name="size" onChange={(e) => handleFilterChange('size', e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md">
                {sizeOptions.map(option => <option key={option}>{option}</option>)
              }
              </select>
            </div>
          </div>
        </aside>

        {/* Pets Grid */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          {pets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-700">No pets match your criteria!</h3>
              <p className="text-slate-500 mt-2">Try adjusting your filters to find more friends.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
