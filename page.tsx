'use client';

import { useState, useMemo } from 'react';
import { PetCard } from '@/components/PetCard';
import { PetFilter } from '@/components/PetFilter';
import { allPets, Pet } from '@/data/pets';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function PetsPage() {
  const [filters, setFilters] = useState({
    species: 'all',
    age: 'all',
    size: 'all',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPets = useMemo(() => {
    return allPets.filter(pet => {
      const matchesFilter = 
        (filters.species === 'all' || pet.species === filters.species) &&
        (filters.age === 'all' || pet.ageCategory === filters.age) &&
        (filters.size === 'all' || pet.size === filters.size);
      
      const matchesSearch = 
        searchTerm === '' ||
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [filters, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">Meet Your New Best Friend</h1>
        <p className="text-lg text-slate-600">Browse our available pets and find the perfect companion for your family.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/4">
          <div className="sticky top-24">
             <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                    type="text"
                    placeholder="Search by name or breed..."
                    className="pl-10 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <PetFilter filters={filters} setFilters={setFilters} />
          </div>
        </div>

        <div className="w-full md:w-3/4">
          {filteredPets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPets.map(pet => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-lg">
                <p className="text-xl text-slate-600">No pets match your criteria.</p>
                <p className="text-slate-500 mt-2">Try adjusting your filters or search term!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
