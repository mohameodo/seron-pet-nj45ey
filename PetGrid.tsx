'use client'

import { useState } from 'react';
import { pets } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import Link from 'next/link';

export default function PetGrid() {
  const [filteredPets, setFilteredPets] = useState(pets);
  const [filters, setFilters] = useState({
    type: 'all',
    size: 'all',
    gender: 'all',
  });

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    let tempPets = [...pets];
    if (newFilters.type !== 'all') {
      tempPets = tempPets.filter(p => p.type.toLowerCase() === newFilters.type);
    }
    if (newFilters.size !== 'all') {
      tempPets = tempPets.filter(p => p.size.toLowerCase() === newFilters.size);
    }
    if (newFilters.gender !== 'all') {
      tempPets = tempPets.filter(p => p.gender.toLowerCase() === newFilters.gender);
    }
    setFilteredPets(tempPets);
  };

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Filters */}
      <div className="lg:col-span-1">
        <Card>
          <CardContent className="p-6 space-y-6">
            <h3 className="text-xl font-semibold">Filter Pets</h3>
            <div className="space-y-2">
                <label className="text-sm font-medium">Type</label>
                <Select onValueChange={(v) => handleFilterChange('type', v)} defaultValue="all">
                    <SelectTrigger><SelectValue placeholder="All Types" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="space-y-2">
                <label className="text-sm font-medium">Size</label>
                <Select onValueChange={(v) => handleFilterChange('size', v)} defaultValue="all">
                    <SelectTrigger><SelectValue placeholder="All Sizes" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Sizes</SelectItem>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="space-y-2">
                <label className="text-sm font-medium">Gender</label>
                <Select onValueChange={(v) => handleFilterChange('gender', v)} defaultValue="all">
                    <SelectTrigger><SelectValue placeholder="All Genders" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Genders</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pet List */}
      <div className="lg:col-span-3">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPets.length > 0 ? filteredPets.map((pet) => (
            <Card key={pet.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-56 w-full">
                  <Image src={pet.images[0]} alt={pet.name} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-2 left-2 bg-white/80 text-slate-800 px-2 py-1 text-xs rounded-full font-semibold">{pet.age}</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-800">{pet.name}</h3>
                  <p className="text-sm text-slate-500">{pet.breed}</p>
                  <Button asChild className="w-full mt-4 rounded-full">
                    <Link href={`/pets/${pet.id}`}>Meet {pet.name}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )) : (
            <p className="sm:col-span-2 xl:col-span-3 text-center text-slate-500">No pets match the current filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
