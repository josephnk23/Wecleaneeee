import React from 'react';
import { Sparkles, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">SparkleClean</span>
            </div>
            <p className="text-sm">
              Professional cleaning services that bring sparkle and shine to your space.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition">Residential Cleaning</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Commercial Cleaning</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Move In/Out Cleaning</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for tips and special offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SparkleClean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}