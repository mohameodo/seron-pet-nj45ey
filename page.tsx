import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { featuredPets } from '@/lib/data';
import { PawPrint, Heart, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="bg-rose-50 pt-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">Find Your <span className="text-primary">Forever</span> Friend</h1>
            <p className="mt-4 text-lg text-slate-600">Discover adorable pets waiting for a loving home. Your new best friend is just a click away.</p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/pets">Browse Pets</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-rose-100 hover:text-primary">
                <Link href="/quiz">Take the Quiz</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-[500px]">
             <Image src="/hero-pets.png" alt="Group of happy pets" layout="fill" objectFit="contain" />
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800">Your Adoption Journey</h2>
        <p className="mt-2 text-slate-600">Three simple steps to find your new family member.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-amber-100 p-4 rounded-full">
              <PawPrint className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Find a Pet</h3>
            <p className="mt-2 text-slate-500">Browse our lovely pets or take the quiz to find your perfect match.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-rose-100 p-4 rounded-full">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Meet & Greet</h3>
            <p className="mt-2 text-slate-500">Schedule a visit to connect with your potential new friend in person.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-sky-100 p-4 rounded-full">
              <Stethoscope className="h-8 w-8 text-sky-500" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Adopt & Care</h3>
            <p className="mt-2 text-slate-500">Finalize the adoption and get lifetime access to our pet care tips.</p>
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800">Waiting for a Home</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPets.map((pet) => (
            <Card key={pet.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-56 w-full">
                    <Image src={pet.images[0]} alt={pet.name} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
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
          ))}
        </div>
        <div className="text-center mt-8">
            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-rose-100 hover:text-primary">
                <Link href="/pets">View All Pets</Link>
            </Button>
        </div>
      </section>

    </div>
  );
}
