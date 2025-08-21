import type { Pet } from "@/lib/types";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <Link href={`/pets/${pet.id}`}>
        <div className="aspect-square w-full relative">
          <Image 
            src={pet.images[0]} 
            alt={`A photo of ${pet.name}`} 
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-slate-800 truncate">{pet.name}</h3>
          <p className="text-slate-500 text-sm mb-2">{pet.breed}</p>
          <div className="flex items-center justify-between text-sm text-slate-600">
             <span>{pet.age.value}</span>
             <span className="flex items-center gap-1 group-hover:text-rose-500 transition-colors">
                 View Profile <ArrowRight className="h-4 w-4"/>
             </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
