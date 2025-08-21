import { allPets } from '@/data/pets';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PawPrint, Cake, Ruler, VenetianMask, Heart } from 'lucide-react';

export default function PetDetailPage({ params }: { params: { id: string } }) {
  const pet = allPets.find(p => p.id === params.id);

  if (!pet) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image Gallery */}
        <div>
          <img src={pet.images[0]} alt={`Main image of ${pet.name}`} className="w-full h-auto object-cover rounded-2xl shadow-lg" />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {pet.images.slice(1).map((img, index) => (
              <img key={index} src={img} alt={`${pet.name} view ${index + 1}`} className="w-full h-32 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        {/* Pet Details */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex justify-between items-start">
            <div>
                <h1 className="text-4xl font-bold text-rose-500">{pet.name}</h1>
                <p className="text-gray-500 mt-1 text-lg">{pet.breed}</p>
            </div>
            <Badge className="capitalize bg-rose-100 text-rose-600 text-sm">{pet.type}</Badge>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6 text-center">
            <div className="bg-rose-50 p-4 rounded-lg">
                <Cake className="h-8 w-8 text-rose-400 mx-auto" />
                <p className="font-semibold mt-2">Age</p>
                <p className="text-gray-600">{pet.age}</p>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg">
                <Ruler className="h-8 w-8 text-rose-400 mx-auto" />
                <p className="font-semibold mt-2">Size</p>
                <p className="text-gray-600">{pet.size}</p>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg">
                <VenetianMask className="h-8 w-8 text-rose-400 mx-auto" />
                <p className="font-semibold mt-2">Gender</p>
                <p className="text-gray-600">{pet.gender}</p>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg">
                <PawPrint className="h-8 w-8 text-rose-400 mx-auto" />
                <p className="font-semibold mt-2">Category</p>
                <p className="text-gray-600">{pet.ageCategory}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">About {pet.name}</h3>
            <p className="text-gray-600 mt-2">{pet.description}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Personality</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {pet.personalityTraits.map(trait => (
                <Badge key={trait} variant="secondary" className="bg-teal-100 text-teal-700">{trait}</Badge>
              ))}
            </div>
          </div>

          <Button size="lg" className="w-full mt-10 bg-rose-500 hover:bg-rose-600 text-white">
            <Heart className="mr-2 h-5 w-5" /> Adopt {pet.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
