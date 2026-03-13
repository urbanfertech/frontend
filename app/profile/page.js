'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaUser, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import apiClient from '@/lib/api';

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading, updateUser } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    pincode: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
      return;
    }

    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        city: user.city || '',
        pincode: user.pincode || '',
      });
    }
  }, [user, isAuthenticated, isLoading, router]);

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
      const response = await apiClient.updateProfile(formData);
      const updatedUser = response.data || response;
      updateUser(updatedUser);
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
      setTimeout(() => {
        setSuccess('');
      }, 3000);
    } catch (err) {
      setError(err.message || 'Failed to update profile. Please try again.');
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
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#FF9F0D]/20 rounded-full flex items-center justify-center">
              <FaUser className="w-8 h-8 text-[#FF9F0D]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">My Profile</h1>
              <p className="text-white/60 text-sm">Manage your account information</p>
            </div>
          </div>

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

          {!isEditing ? (
            // View Mode
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-1">Name</p>
                  <p className="text-lg font-semibold flex items-center gap-2">
                    <FaUser className="w-4 h-4 text-[#FF9F0D]" />
                    {formData.name}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-1">Email</p>
                  <p className="text-lg font-semibold flex items-center gap-2">
                    <FaEnvelope className="w-4 h-4 text-[#FF9F0D]" />
                    {formData.email}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-1">Phone</p>
                  <p className="text-lg font-semibold flex items-center gap-2">
                    <FaPhone className="w-4 h-4 text-[#FF9F0D]" />
                    {formData.phone || 'Not provided'}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-1">Location</p>
                  <p className="text-lg font-semibold flex items-center gap-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#FF9F0D]" />
                    {formData.city || 'Not provided'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="w-full px-6 py-3 bg-[#FF9F0D] text-navy rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-8"
              >
                Edit Profile <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            // Edit Mode
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D] transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white/50 placeholder:text-white/30 focus:outline-none cursor-not-allowed opacity-50"
                />
                <p className="text-xs text-white/60 mt-1">Email cannot be changed</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D] transition-all"
                  disabled={loading}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D] transition-all"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Postal code"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D] transition-all"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
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
                  {loading ? 'Saving...' : 'Save Changes'}
                  {!loading && <FaArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
