'use client';

import { useState, useMemo } from 'react';
import { allPets } from '@/data/pets';
import { PetCard } from '@/components/PetCard';
import { PetFilterSidebar } from '@/components/PetFilterSidebar';
import type { Pet } from '@/lib/types';
import { Frown } from 'lucide-react';

export default function BrowsePage() {
  const [filters, setFilters] = useState({
    type: 'all',
    age: 'all',
    size: 'all',
    gender: 'all',
  });

  const filteredPets = useMemo(() => {
    return allPets.filter(pet => {
      if (filters.type !== 'all' && pet.type.toLowerCase() !== filters.type) return false;
      if (filters.age !== 'all' && pet.ageCategory.toLowerCase() !== filters.age) return false;
      if (filters.size !== 'all' && pet.size.toLowerCase() !== filters.size) return false;
      if (filters.gender !== 'all' && pet.gender.toLowerCase() !== filters.gender) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rose-500">Find Your New Best Friend</h1>
        <p className="mt-2 text-gray-600">Browse our available pets and find the perfect one for you.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <PetFilterSidebar filters={filters} setFilters={setFilters} />
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5">
          {filteredPets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPets.map((pet: Pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full bg-gray-50 rounded-lg p-12">
                <Frown className="h-16 w-16 text-gray-400" />
                <h2 className="mt-4 text-2xl font-semibold text-gray-700">No Pets Found</h2>
                <p className="mt-2 text-gray-500">Try adjusting your filters to find more furry friends!</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
