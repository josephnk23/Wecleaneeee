import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">SparkleClean</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}