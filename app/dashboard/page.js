'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaUser, FaPaw, FaCalendarAlt, FaSignOutAlt, FaArrowRight } from 'react-icons/fa';
import apiClient from '@/lib/api';

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [pets, setPets] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  useEffect(() => {
    if (isAuthenticated && user) {
      loadDashboardData();
    }
  }, [isAuthenticated, user]);

  const loadDashboardData = async () => {
    try {
      setLoadingData(true);
      setError('');

      const [profileRes, petsRes, bookingsRes] = await Promise.allSettled([
        apiClient.getProfile(),
        apiClient.getPets(),
        apiClient.getMyBookings(),
      ]);

      if (profileRes.status === 'fulfilled') {
        setProfile(profileRes.value.data || profileRes.value);
      }
      if (petsRes.status === 'fulfilled') {
        setPets(petsRes.value.data || petsRes.value);
      }
      if (bookingsRes.status === 'fulfilled') {
        setBookings(bookingsRes.value.data || bookingsRes.value);
      }
    } catch (err) {
      console.error('Error loading dashboard:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoadingData(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (isLoading || loadingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0A1F] via-[#1A1A2E] to-[#0F0F1E] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF9F0D]"></div>
          <p className="mt-4 text-white/60">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A1F] via-[#1A1A2E] to-[#0F0F1E] text-white">
      {/* Header */}
      <nav className="bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#FF9F0D]">
            UrbanFur
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg hover:bg-red-500/30 transition-all"
          >
            <FaSignOutAlt className="w-4 h-4" />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200">
            {error}
          </div>
        )}

        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, <span className="text-[#FF9F0D]">{user?.name}</span>
          </h1>
          <p className="text-white/60">Manage your pets and bookings</p>
        </div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#FF9F0D]/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#FF9F0D]/20 rounded-full flex items-center justify-center">
                <FaUser className="w-8 h-8 text-[#FF9F0D]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{user?.name}</h2>
                <p className="text-sm text-white/60">{user?.email}</p>
              </div>
            </div>
            {user?.phone && <p className="text-white/80 mb-2">Phone: {user.phone}</p>}
            {user?.city && <p className="text-white/80">Location: {user.city}</p>}
            <Link
              href="/profile"
              className="mt-6 inline-block px-4 py-2 bg-[#FF9F0D] text-navy rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Edit Profile
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex items-center gap-4 hover:border-[#FF9F0D]/50 transition-all">
            <div className="w-12 h-12 bg-[#FF9F0D]/20 rounded-full flex items-center justify-center">
              <FaPaw className="w-6 h-6 text-[#FF9F0D]" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Total Pets</p>
              <p className="text-3xl font-bold">{pets.length}</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex items-center gap-4 hover:border-[#FF9F0D]/50 transition-all">
            <div className="w-12 h-12 bg-[#FF9F0D]/20 rounded-full flex items-center justify-center">
              <FaCalendarAlt className="w-6 h-6 text-[#FF9F0D]" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Total Bookings</p>
              <p className="text-3xl font-bold">{bookings.length}</p>
            </div>
          </div>
        </div>

        {/* Pets Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Pets</h2>
            <Link
              href="/pets/add"
              className="px-4 py-2 bg-[#FF9F0D] text-navy rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
            >
              Add Pet <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets && pets.length > 0 ? (
              pets.map((pet) => (
                <div
                  key={pet.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#FF9F0D]/50 transition-all"
                >
                  <h3 className="text-xl font-bold text-[#FF9F0D] mb-2">{pet.name}</h3>
                  <p className="text-white/80 mb-1">
                    <span className="text-white/60">Breed: </span> {pet.breed}
                  </p>
                  <p className="text-white/80 mb-1">
                    <span className="text-white/60">Age: </span> {pet.age} years
                  </p>
                  <p className="text-white/80 mb-4">
                    <span className="text-white/60">Type: </span>
                    {pet.type}
                  </p>
                  <Link
                    href={`/pets/${pet.id}`}
                    className="text-[#FF9F0D] hover:text-[#FF9F0D]/80 font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-white/60 mb-4">No pets added yet</p>
                <Link
                  href="/pets/add"
                  className="inline-block px-6 py-3 bg-[#FF9F0D] text-navy rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Add Your First Pet
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Bookings Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Bookings</h2>
          <div className="grid grid-cols-1 gap-4">
            {bookings && bookings.length > 0 ? (
              bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#FF9F0D]/50 transition-all flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Booking #{booking.id.slice(0, 8)}
                    </h3>
                    <p className="text-white/60 text-sm">
                      Date: {new Date(booking.bookingDate).toLocaleDateString()}
                    </p>
                    <p className="text-white/60 text-sm">Status: {booking.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#FF9F0D]">
                      ${booking.totalAmount}
                    </p>
                    <Link
                      href={`/bookings/${booking.id}`}
                      className="mt-2 inline-block text-[#FF9F0D] hover:text-[#FF9F0D]/80 font-medium"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                <p className="text-white/60 mb-4">No bookings yet</p>
                <Link
                  href="/groomers"
                  className="inline-block px-6 py-3 bg-[#FF9F0D] text-navy rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Browse Groomers
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
