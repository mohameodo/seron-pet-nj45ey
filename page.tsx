import PetCard from "@/components/PetCard";
import { Button } from "@/components/ui/Button";
import { pets } from "@/lib/mockData";
import { PawPrint, Search } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const featuredPets = pets.slice(0, 4);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 text-center bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100 to-teal-100 opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <PawPrint className="mx-auto h-16 w-16 text-rose-400 mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight mb-4">
            Find Your <span className="text-rose-500">Forever</span> Friend
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-8">
            Welcome to PawsConnect, where loving homes meet adorable pets. Start your journey to find a loyal companion today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/pets">
                <Search className="mr-2 h-5 w-5" />
                Meet the Pets
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/quiz">Take the Matching Quiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Featured Pets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg" variant="secondary">
              <Link href="/pets">View All Pets</Link>
            </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Your Adoption Journey</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-rose-100 text-rose-500 mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">1. Find a Pet</h3>
              <p className="text-slate-500">Browse our adorable pets or take the quiz to find your perfect match.</p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-500 mx-auto mb-4">
                <PawPrint className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">2. Meet & Greet</h3>
              <p className="text-slate-500">Schedule a virtual or in-person meeting to get to know them.</p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-500 mx-auto mb-4">
                <PawPrint className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">3. Adopt & Love</h3>
              <p className="text-slate-500">Complete the adoption process and welcome your new best friend home.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
