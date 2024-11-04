import React from 'react';
import { Home, Building2, Calendar, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    description: 'Comprehensive home cleaning services tailored to your needs.'
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    description: 'Professional cleaning solutions for businesses and offices.'
  },
  {
    icon: Calendar,
    title: 'Regular Service',
    description: 'Scheduled cleaning services on a weekly or monthly basis.'
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Thorough deep cleaning for those special occasions.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}