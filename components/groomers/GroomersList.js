'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import apiClient from '@/lib/api';

export default function GroomersList() {
  const [groomers, setGroomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadGroomers();
  }, []);

  const loadGroomers = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getAllGroomers();

      // Normalize different possible response shapes into an array
      let items = [];
      if (Array.isArray(response)) {
        items = response;
      } else if (response && Array.isArray(response.data)) {
        items = response.data;
      } else if (response && response.data && Array.isArray(response.data.data)) {
        // sometimes APIs nest under data.data
        items = response.data.data;
      } else if (response && response.data && typeof response.data === 'object') {
        // single object returned - wrap it
        items = [response.data];
      } else {
        // fallback: if response itself is an object, try to extract values
        if (response && typeof response === 'object') {
          console.warn('Groomers response is an object, attempting to extract array fields', response);
          // try common keys
          if (Array.isArray(response.groomers)) items = response.groomers;
          else if (Array.isArray(response.items)) items = response.items;
          else if (Array.isArray(response.data)) items = response.data;
        }
      }

      setGroomers(items || []);
    } catch (err) {
      console.error('Error loading groomers:', err);
      setError('Failed to load groomers');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF9F0D]"></div>
        <p className="mt-4 text-gray-600">Loading groomers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={loadGroomers}
          className="px-6 py-2 bg-[#FF9F0D] text-white rounded-lg font-medium hover:shadow-lg transition-all"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!groomers || groomers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No groomers available at the moment</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {groomers.map((groomer) => (
        <PremiumGroomerCard
          key={groomer.id}
          id={groomer.id}
          name={groomer.user?.name || 'Professional Groomer'}
          specialty={groomer.bio || 'Expert Grooming'}
          rating={groomer.rating ? parseFloat(groomer.rating).toFixed(1) : '4.8'}
          reviews={groomer.totalReviews || 0}
          experience={groomer.yearsOfExperience || 0}
          img={groomer.user?.photo || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop'}
          city={groomer.user?.city || 'Available'}
        />
      ))}
    </div>
  );
}

function PremiumGroomerCard({ id, name, specialty, rating, reviews, experience, img, city }) {
  return (
    <div className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-80 overflow-hidden">
        <img
          src={img}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full font-serif text-[#1A1A1A] text-sm flex items-center gap-2 shadow-lg">
          <FaStar className="text-[#FF9F0D]" /> {rating}
        </div>
      </div>

      <div className="p-10">
        <div className="mb-6">
          <span className="text-[10px] text-[#FF9F0D] font-bold uppercase tracking-widest">
            {specialty.substring(0, 30)}...
          </span>
          <h3 className="font-serif text-3xl text-[#1A1A1A] font-medium mt-2">{name}</h3>
          <p className="text-gray-500 text-sm mt-1">📍 {city}</p>
        </div>

        <div className="flex justify-between border-y border-gray-50 py-6 mb-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <div className="flex flex-col gap-1">
            <span>Experience</span>
            <span className="text-[#1A1A1A]">{experience} yrs</span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span>Reviews</span>
            <span className="text-[#1A1A1A]">{reviews}</span>
          </div>
        </div>

        <Link
          href={`/groomers/${id}`}
          className="w-full bg-navy text-white py-4 rounded-xl font-medium hover:bg-[#2A2A2A] transition-all flex items-center justify-center gap-2 inline-block text-center"
        >
          View Profile
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
