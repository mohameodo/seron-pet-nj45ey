import Link from 'next/link';
import type { Pet } from '@/lib/types';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Heart } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <Link href={`/pets/${pet.id}`}>
        <div className="relative">
          <img src={pet.images[0]} alt={pet.name} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
          <Badge className="absolute top-3 right-3 bg-rose-500 text-white capitalize">{pet.type}</Badge>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
          <p className="text-gray-500 text-sm">{pet.breed}</p>
          <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
            <span>{pet.age}</span>
            <span>{pet.gender}</span>
            <span>{pet.size}</span>
          </div>
        </div>
        <div className="p-4 pt-0">
            <div className="flex items-center justify-center gap-2 w-full bg-rose-50 text-rose-500 py-2 rounded-lg group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Heart className="h-4 w-4"/>
                <span>View Profile</span>
            </div>
        </div>
      </Link>
    </Card>
  );
}
