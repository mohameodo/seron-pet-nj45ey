import Link from "next/link"
import { PawPrint } from 'lucide-react'
import { Button } from "./ui/button"

const Navbar = () => {
  const navLinks = [
    { href: "/pets", label: "Find a Pet" },
    { href: "/quiz", label: "Quiz" },
    { href: "/tips", label: "Care Tips" },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-800">
          <PawPrint className="h-7 w-7 text-primary" />
          PawsConnect
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-slate-600 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <Button asChild className="rounded-full">
            <Link href="#">Adopt Now</Link>
        </Button>
      </nav>
    </header>
  )
}

export default Navbar
