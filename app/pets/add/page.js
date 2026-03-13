'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import apiClient from '@/lib/api';

export default function AddPetPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    weight: '',
    color: '',
    medicalHistory: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (!formData.name || !formData.breed || !formData.age) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }

      const response = await apiClient.addPet({
        name: formData.name,
        type: formData.type,
        breed: formData.breed,
        age: parseInt(formData.age),
        weight: formData.weight ? parseFloat(formData.weight) : null,
        color: formData.color,
        medicalHistory: formData.medicalHistory,
      });

      setSuccess('Pet added successfully! Redirecting...');
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (err) {
      setError(err.message || 'Failed to add pet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0A1F] via-[#1A1A2E] to-[#0F0F1E] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF9F0D]"></div>
          <p className="mt-4 text-white/60">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A1F] via-[#1A1A2E] to-[#0F0F1E] text-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-white/60 hover:text-[#FF9F0D] transition-colors mb-8"
        >
          <FaArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-2">Add Your Pet</h1>
          <p className="text-white/60 mb-8">Tell us about your furry friend</p>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Pet Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g., Max, Bella"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D] transition-all"
                disabled={loading}
                required
              />
            </div>

            {/* Pet Type */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Pet Type *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF9F0D] transition-all"
                disabled={loading}
                required
              >
                <option value="dog" className="bg-[#1A1A2E]">
                  Dog
                </option>
                <option value="cat" className="bg-[#1A1A2E]">
                  Cat
                </option>
                <option value="rabbit" className="bg-[#1A1A2E]">
                  Rabbit
                </option>
                <option value="bird" className="bg-[#1A1A2E]">
                  Bird
                </option>
                <option value="other" className="bg-[#1A1A2E]">
                  Other
                </option>
              </select>
            </div>

            {/* Breed */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Breed *
              </label>
              <input
                type="text"
                name="breed"
                placeholder="e.g., Golden Retriever, Persian"
                value={formData.breed}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D] transition-all"
                disabled={loading}
                required
              />
            </div>

            {/* Age and Weight (2 columns) */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Age (years) *
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="e.g., 2"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D] transition-all"
                  disabled={loading}
                  required
                  min="0"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  placeholder="e.g., 25"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D] transition-all"
                  disabled={loading}
                  min="0"
                  step="0.1"
                />
              </div>
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Color/Appearance
              </label>
              <input
                type="text"
                name="color"
                placeholder="e.g., Golden, Black with white spots"
                value={formData.color}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D] transition-all"
                disabled={loading}
              />
            </div>

            {/* Medical History */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Medical History / Special Notes
              </label>
              <textarea
                name="medicalHistory"
                placeholder="Any allergies, medical conditions, or behavioral notes..."
                value={formData.medicalHistory}
                onChange={handleChange}
                rows="4"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D] transition-all resize-none"
                disabled={loading}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => router.back()}
                className="flex-1 px-6 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-[#FF9F0D] text-navy rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Adding Pet...' : 'Add Pet'}
                {!loading && <FaArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
