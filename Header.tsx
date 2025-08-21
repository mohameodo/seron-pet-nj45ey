import Link from "next/link";
import { PawPrint } from 'lucide-react';

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pets", label: "Find a Pet" },
    { href: "/quiz", label: "Matching Quiz" },
    { href: "/tips", label: "Pet Care Tips" },
]

export default function Header() {
    return (
        <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-800">
                        <PawPrint className="h-8 w-8 text-rose-500" />
                        PawsConnect
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map(link => (
                             <Link key={link.href} href={link.href} className="text-slate-600 hover:text-rose-500 transition-colors font-medium">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    {/* Mobile menu button can be added here */}
                </div>
            </div>
        </header>
    )
}
