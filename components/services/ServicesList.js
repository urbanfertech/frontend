'use client';

import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import apiClient from '@/lib/api';

export default function ServicesList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getAllServices();
      setServices(response.data || response || []);
    } catch (err) {
      console.error('Error loading services:', err);
      setError('Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF9F0D]"></div>
        <p className="mt-4 text-gray-600">Loading services...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={loadServices}
          className="px-6 py-2 bg-[#FF9F0D] text-white rounded-lg font-medium hover:shadow-lg transition-all"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!services || services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No services available at the moment</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {services.map((service) => (
        <PremiumServiceCard
          key={service.id}
          id={service.id}
          title={service.name}
          description={service.description || 'Professional grooming service'}
          duration={service.duration || 60}
          isActive={service.isActive}
        />
      ))}
    </div>
  );
}

function PremiumServiceCard({ id, title, description, duration, isActive }) {
  const allFeatures = [
    'Professional Equipment',
    'Expert Care',
    'Pet-Friendly Approach',
    'Quality Products',
  ];

  return (
    <div className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white p-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9F0D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="h-12 w-12 bg-[#FF9F0D]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#FF9F0D]/20 transition-all">
          <div className="text-[#FF9F0D] text-xl">✨</div>
        </div>

        <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-4">
          {title}
        </h3>

        <p className="text-gray-600 font-light mb-8 leading-relaxed text-base">
          {description}
        </p>

        <div className="mb-8 pb-8 border-b border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
            Duration
          </p>
          <p className="text-2xl font-bold text-[#1A1A1A]">{duration} minutes</p>
        </div>

        <div className="mb-12">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            Included
          </p>
          <ul className="space-y-3">
            {allFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#FF9F0D]/10">
                  <FaCheck className="h-2.5 w-2.5 text-[#FF9F0D]" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button
          disabled={!isActive}
          className={`w-full py-4 rounded-2xl font-medium text-lg transition-all flex items-center justify-center gap-2 ${
            isActive
              ? 'bg-navy text-white hover:bg-[#2A2A2A] shadow-lg hover:shadow-xl'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isActive ? 'Book Now' : 'Coming Soon'}
        </button>
      </div>
    </div>
  );
}
