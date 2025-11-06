import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-black/10">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl">Flames Studio</a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/90 backdrop-blur">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3 text-gray-700">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#process" onClick={() => setOpen(false)}>Process</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
