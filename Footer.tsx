import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <PawPrint className="h-7 w-7 text-rose-400" />
            <span className="text-lg font-bold text-white">PawsConnect</span>
          </div>
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} PawsConnect. All Rights Reserved.</p>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-700 text-center text-xs text-slate-500">
            <p>Designed with love to help pets find their forever homes.</p>
        </div>
      </div>
       <a href="https://seron.dev" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
          Made by Seron
        </a>
    </footer>
  );
}
