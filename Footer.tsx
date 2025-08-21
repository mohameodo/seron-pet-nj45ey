import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brown-dark text-cream-light py-12">
      <div className="container mx-auto px-4 text-center">
        <Link href="/" className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-4">
          <PawPrint className="h-8 w-8" />
          <span>PawsConnect</span>
        </Link>
        <div className="flex justify-center gap-6 text-gray-300 my-6">
          <Link href="/browse" className="hover:text-white transition-colors">Find a Pet</Link>
          <Link href="/quiz" className="hover:text-white transition-colors">Quiz</Link>
          <Link href="/tips" className="hover:text-white transition-colors">Pet Care Tips</Link>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} PawsConnect. All rights reserved.</p>
         <a href="https://seron.dev" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors">
          Made by Seron
        </a>
      </div>
    </footer>
  );
}
