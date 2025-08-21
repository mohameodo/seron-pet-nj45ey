import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PetCard } from '@/components/PetCard';
import { featuredPets } from '@/data/pets';
import { PawPrint, Heart, Search } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* Hero Section */}
      <section className="bg-rose-100 pt-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-rose-500 leading-tight">Find Your <br/>Forever Friend</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-lg mx-auto md:mx-0">Discover adorable pets waiting for a loving home. Your new best friend is just a click away.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600 text-white">
                <Link href="/browse">Browse Pets <Search className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50">
                <Link href="/quiz">Take the Quiz <Heart className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-[500px]">
             <img src="https://loremflickr.com/800/800/happy,dog,cat?lock=101" alt="Happy dog and cat" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="container mx-auto px-4">
        <div className="text-center">
          <PawPrint className="mx-auto h-12 w-12 text-rose-400" />
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Meet Some Friends</h2>
          <p className="mt-2 text-gray-600">These lovely pets are looking for a new family right now</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="ghost" className="text-rose-500 hover:bg-rose-100">
                <Link href="/browse">View All Pets &rarr;</Link>
            </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-teal-50 py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Adoption Made Easy</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Follow these simple steps to bring home your new companion.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-12 text-left">
                <div className="flex flex-col items-center text-center">
                    <div className="bg-white p-6 rounded-full shadow-lg border-4 border-teal-200"><Search className="h-10 w-10 text-teal-500"/></div>
                    <h3 className="text-xl font-semibold mt-6">1. Search for a Pet</h3>
                    <p className="mt-2 text-gray-500">Browse through our lovely pets or take the quiz to find your perfect match.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="bg-white p-6 rounded-full shadow-lg border-4 border-teal-200"><Heart className="h-10 w-10 text-teal-500"/></div>
                    <h3 className="text-xl font-semibold mt-6">2. Meet & Greet</h3>
                    <p className="mt-2 text-gray-500">Schedule a visit to meet your potential new friend and see if you connect.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="bg-white p-6 rounded-full shadow-lg border-4 border-teal-200"><PawPrint className="h-10 w-10 text-teal-500"/></div>
                    <h3 className="text-xl font-semibold mt-6">3. Adopt & Welcome Home</h3>
                    <p className="mt-2 text-gray-500">Complete the adoption process and start your new life together.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
