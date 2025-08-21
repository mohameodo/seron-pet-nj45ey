import { FeaturedPets } from "@/components/FeaturedPets";
import { Button } from "@/components/ui/button";
import { PawPrint, Heart, Search } from 'lucide-react';
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full text-center py-20 lg:py-32 bg-rose-100/60 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 text-rose-200/50">
            <PawPrint className="w-full h-full transform rotate-[-30deg]"/>
        </div>
        <div className="absolute -bottom-12 -right-12 w-52 h-52 text-rose-200/50">
            <Heart className="w-full h-full transform rotate-[20deg]"/>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 tracking-tight">Find Your Forever Friend</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">Discover adorable pets waiting for a loving home. Your new best friend is just a click away.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-105">
              <Link href="/pets"><Search className="mr-2 h-5 w-5"/> Browse Pets</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full shadow-lg transition-transform transform hover:scale-105 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white">
              <Link href="/quiz"><Heart className="mr-2 h-5 w-5"/> Take the Match Quiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <FeaturedPets />

      {/* How It Works Section */}
      <section className="w-full py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Adoption Made Easy</h2>
          <p className="text-slate-600 mb-12 max-w-xl mx-auto">Follow these simple steps to find and welcome your new family member.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-rose-50 rounded-xl flex items-start gap-4">
              <div className="bg-rose-500 text-white rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Search Pets</h3>
                <p className="text-slate-500">Browse through profiles of lovely pets with detailed information and photos.</p>
              </div>
            </div>
            <div className="p-6 bg-rose-50 rounded-xl flex items-start gap-4">
              <div className="bg-rose-500 text-white rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Find Your Match</h3>
                <p className="text-slate-500">Use our quiz to find a pet that matches your personality and lifestyle.</p>
              </div>
            </div>
            <div className="p-6 bg-rose-50 rounded-xl flex items-start gap-4">
              <div className="bg-rose-500 text-white rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Start Your Life Together</h3>
                <p className="text-slate-500">Complete the adoption process and bring your new companion home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
