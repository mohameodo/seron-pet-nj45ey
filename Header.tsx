import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-rose-500">
          <PawPrint className="h-8 w-8" />
          <span>PawsConnect</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          <Link href="/browse" className="hover:text-rose-500 transition-colors">Find a Pet</Link>
          <Link href="/quiz" className="hover:text-rose-500 transition-colors">Quiz</Link>
          <Link href="/tips" className="hover:text-rose-500 transition-colors">Pet Care Tips</Link>
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
}
