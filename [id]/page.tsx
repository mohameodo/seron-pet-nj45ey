import { pets } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Image from 'next/image';
import { Button } from "@/components/ui/Button";
import { PawPrint, Calendar, Ruler, Heart } from 'lucide-react';

export default function PetDetailPage({ params }: { params: { id: string } }) {
  const pet = pets.find((p) => p.id === params.id);

  if (!pet) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square w-full relative mb-4 rounded-xl overflow-hidden shadow-lg">
               <Image 
                src={pet.images[0]} 
                alt={`Photo of ${pet.name}`} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {pet.images.slice(1).map((img, index) => (
                 <div key={index} className="aspect-square w-full relative rounded-lg overflow-hidden shadow-md">
                    <Image 
                      src={img} 
                      alt={`Photo of ${pet.name} ${index + 2}`} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 30vw, 15vw"
                    />
                 </div>
              ))}
            </div>
          </div>

          {/* Pet Info */}
          <div className="flex flex-col justify-center">
            <span className="text-rose-500 font-semibold mb-2">{pet.breed}</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">{pet.name}</h1>
            <p className="text-slate-600 text-lg mb-6">{pet.story}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 text-center">
                <div className="bg-rose-50 p-4 rounded-lg">
                    <Calendar className="mx-auto h-6 w-6 text-rose-500 mb-1"/>
                    <p className="font-semibold text-slate-700">{pet.age.value}</p>
                    <p className="text-sm text-slate-500">Age</p>
                </div>
                 <div className="bg-teal-50 p-4 rounded-lg">
                    <Ruler className="mx-auto h-6 w-6 text-teal-500 mb-1"/>
                    <p className="font-semibold text-slate-700">{pet.size}</p>
                    <p className="text-sm text-slate-500">Size</p>
                </div>
                 <div className="bg-amber-50 p-4 rounded-lg">
                    <PawPrint className="mx-auto h-6 w-6 text-amber-500 mb-1"/>
                    <p className="font-semibold text-slate-700">{pet.gender}</p>
                    <p className="text-sm text-slate-500">Gender</p>
                </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto">
                <Heart className="mr-2 h-5 w-5"/>
                Start Adoption Process
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
