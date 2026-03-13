'use client';

import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaArrowLeft } from "react-icons/fa";
import AuthLayout from "../layout";
import { useAuth } from "@/context/AuthContext";
import apiClient from "@/lib/api";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (!email || !password) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      await login(email, password);
      setSuccess('Login successful! Redirecting...');
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    apiClient.googleLogin('USER');
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 lg:gap-16">
        {/* Glassmorphic Form Card */}
        <div className="w-full md:w-[500px] bg-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
          {/* Back Button */}
          <Link
            href="/"
            className="absolute top-6 left-8 text-white/40 hover:text-white transition-colors group flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
          >
            <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>

          <div className="text-center mb-12 mt-4">
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-white mb-2 tracking-tight group">
              Sign <span className="text-[#FF9F0D] italic font-light">In.</span>
            </h1>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200 text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-8">
            {/* Email Field */}
            <div className="relative group">
              <div className="flex items-center justify-between mb-1">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] group-focus-within:text-white transition-colors">
                  Email
                </label>
                <FaEnvelope className="text-white/20 group-focus-within:text-white/60 transition-colors w-3 h-3" />
              </div>
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white transition-all"
                disabled={loading}
              />
            </div>

            {/* Password Field */}
            <div className="relative group">
              <div className="flex items-center justify-between mb-1">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] group-focus-within:text-white transition-colors">
                  Password
                </label>
                <FaLock className="text-white/20 group-focus-within:text-white/60 transition-colors w-3 h-3" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white transition-all"
                disabled={loading}
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <Link href="/forgot-password" className="text-[10px] font-bold text-white/40 hover:text-[#FF9F0D] transition-colors uppercase tracking-widest">
                Forgot Secret?
              </Link>
            </div>

            {/* Sign In Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF9F0D] text-navy py-4 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:shadow-[0_10px_30px_rgba(255,159,13,0.3)] hover:scale-[1.02] transition-all transform active:scale-[0.98] mt-4 border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-10">
            <div className="relative flex items-center justify-center mb-8">
              <div className="w-full border-t border-white/10" />
              <span className="bg-transparent px-4 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] absolute">
                Or Continue With
              </span>
            </div>
            <button 
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaGoogle className="w-3.5 h-3.5 text-[#FF9F0D]" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Google Identity</span>
            </button>
          </div>

          <p className="text-center mt-10 text-[10px] font-bold uppercase tracking-widest text-white/30">
            New to UrbanFur?{" "}
            <Link
              href="/signup"
              className="text-white hover:underline transition-colors ml-1 font-black"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Right Side - Squircle Image Container */}
        <div className="relative hidden md:block group">
          {/* Outer Squircle with Glow */}
          <div className="w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] bg-[#0A0A1F] rounded-[80px] lg:rounded-[120px] overflow-hidden relative shadow-[0_0_100px_rgba(188,130,168,0.2)]">
            <img
              src="/login.png"
              alt="Pet Sanctuary"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[10s] ease-out opacity-80"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A2E]/80 via-transparent to-white/5" />

            {/* Floating Label */}
            <div className="absolute bottom-12 left-12 right-12">
              <div className="h-px w-12 bg-[#FF9F0D] mb-6 opacity-60"></div>
              <h3 className="font-serif text-3xl lg:text-4xl text-white font-medium leading-tight">
                Your pet's <br />
                <span className="italic text-[#FF9F0D]">Elite Sanctuary.</span>
              </h3>
            </div>
          </div>

          {/* Decorative Sparkles (inspired by ref image dots) */}
          <div className="absolute top-10 right-10 w-2 h-2 bg-[#FF9F0D] rounded-full blur-[2px] animate-pulse" />
          <div className="absolute bottom-20 -right-4 w-1.5 h-1.5 bg-white rounded-full blur-[1px] opacity-40 animate-pulse delay-700" />
          <div className="absolute -top-6 -left-6 w-3 h-3 bg-[#FF9F0D] rounded-full blur-[4px] opacity-20" />
        </div>
      </div>
    </AuthLayout>
  );
}
