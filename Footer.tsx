import Link from "next/link"
import { PawPrint } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto py-12 px-4 grid md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
            <PawPrint className="h-7 w-7 text-primary" />
            PawsConnect
          </Link>
          <p className="text-sm text-slate-400">Connecting loving homes with pets in need.</p>
        </div>
        <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/pets" className="hover:text-primary transition-colors">Pets</Link></li>
                <li><Link href="/quiz" className="hover:text-primary transition-colors">Quiz</Link></li>
                <li><Link href="/tips" className="hover:text-primary transition-colors">Care Tips</Link></li>
            </ul>
        </div>
         <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
        </div>
        <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <p>123 Pet Lane, Animal City</p>
            <p>contact@pawsconnect.dev</p>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-8 py-6">
        <p className="text-center text-sm text-slate-400">&copy; {new Date().getFullYear()} PawsConnect. All Rights Reserved.</p>
      </div>
      <a href="https://seron.dev" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 bg-primary text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50">
        Made by Seron
      </a>
    </footer>
  )
}

export default Footer
