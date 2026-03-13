  'use client';

  import { useState } from 'react';
  import Link from "next/link";
  import { useRouter } from 'next/navigation';
  import { FaUser, FaEnvelope, FaLock, FaGoogle, FaArrowLeft, FaCheck } from "react-icons/fa";
  import AuthLayout from "../layout";
  import { useAuth } from "@/context/AuthContext";
  import apiClient from "@/lib/api";

  export default function SignupPage() {
    const { signup } = useAuth();
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async (e) => {
      e.preventDefault();
      setError('');
      setSuccess('');
      setLoading(true);

      try {
        if (!firstName || !lastName || !email || !password) {
          setError('Please fill in all fields');
          setLoading(false);
          return;
        }

        if (!termsAccepted) {
          setError('Please accept the terms and conditions');
          setLoading(false);
          return;
        }

        const fullName = `${firstName} ${lastName}`;
        await signup({
          name: fullName,
          email,
          password,
          role: 'USER',
        });

        setSuccess('Account created successfully! Redirecting...');
        
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } catch (err) {
        // HTML or unexpected response tends to start with '<'
        if (typeof err.message === 'string' && err.message.trim().startsWith('<')) {
          setError('Server returned an invalid response. Check that the backend is running on port 3000 and CORS is configured correctly.');
        } else {
          setError(err.message || 'Signup failed. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    const handleGoogleSignup = () => {
      apiClient.googleLogin('USER');
    };

    return (
      <AuthLayout>
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 lg:gap-16">
          {/* Glassmorphic Form Card */}
          <div className="w-full md:w-[550px] bg-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
            {/* Back Button */}
            <Link
              href="/"
              className="absolute top-6 left-8 text-white/40 hover:text-white transition-colors group flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
            >
              <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Home
            </Link>

            <div className="text-center mb-10 mt-4">
              <h1 className="font-serif text-3xl md:text-4xl font-medium text-white mb-2 tracking-tight">
                Create <span className="text-[#FF9F0D] italic font-light">Account.</span>
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

            <form onSubmit={handleSignup} className="space-y-6">
              {/* Name Fields - Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] group-focus-within:text-white transition-colors">
                      First Name
                    </label>
                    <FaUser className="text-white/20 group-focus-within:text-white/60 transition-colors w-2.5 h-2.5" />
                  </div>
                  <input
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white transition-all"
                    disabled={loading}
                  />
                </div>
                <div className="relative group">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] group-focus-within:text-white transition-colors">
                      Last Name
                    </label>
                    <FaUser className="text-white/20 group-focus-within:text-white/60 transition-colors w-2.5 h-2.5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white transition-all"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] group-focus-within:text-white transition-colors">
                    Email
                  </label>
                  <FaEnvelope className="text-white/20 group-focus-within:text-white/60 transition-colors w-2.5 h-2.5" />
                </div>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white transition-all"
                  disabled={loading}
                />
              </div>

              {/* Password Field */}
              <div className="relative group">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] group-focus-within:text-white transition-colors">
                    Password
                  </label>
                  <FaLock className="text-white/20 group-focus-within:text-white/60 transition-colors w-2.5 h-2.5" />
                </div>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white transition-all"
                  disabled={loading}
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <div className="relative flex items-center pt-0.5">
                  {/* visually hidden checkbox for accessibility */}
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="sr-only"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    disabled={loading}
                  />
                  {/* clickable label/container - toggles state manually too */}
                  <div
                    onClick={() => !loading && setTermsAccepted(prev => !prev)}
                    className="flex items-center gap-3 text-[10px] font-medium text-white/40 cursor-pointer select-none leading-relaxed"
                  >
                    <span className={`w-5 h-5 border border-white/20 rounded-md flex items-center justify-center transition-all bg-white/5 ${termsAccepted ? 'bg-[#FF9F0D] border-[#FF9F0D]' : ''}`}>
                      {termsAccepted && (
                        <FaCheck className="w-2.5 h-2.5 text-navy transition-transform" />
                      )}
                    </span>
                    <span>
                      I accept the <Link href="/terms" className="text-white hover:text-[#FF9F0D] hover:underline transition-colors" onClick={e => e.stopPropagation()}>
                        Terms of Service
                      </Link>.
                    </span>
                  </div>
                </div>
              </div>

              {/* Sign Up Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF9F0D] text-navy py-4 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:shadow-[0_10px_30px_rgba(255,159,13,0.3)] hover:scale-[1.02] transition-all transform active:scale-[0.98] mt-4 border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Account...' : 'Establish Account'}
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative flex items-center justify-center mb-6">
                <div className="w-full border-t border-white/10" />
                <span className="bg-transparent px-4 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] absolute">
                  Or Continue With
                </span>
              </div>
              <button 
                type="button"
                onClick={handleGoogleSignup}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaGoogle className="w-3.5 h-3.5 text-[#FF9F0D]" />
                <span className="text-[9px] font-bold uppercase tracking-widest">Google Identity</span>
              </button>
            </div>

            <p className="text-center mt-8 text-[10px] font-bold uppercase tracking-widest text-white/30">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-white hover:underline transition-colors ml-1 font-black"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Right Side - Squircle Image Container */}
          <div className="relative hidden md:block group">
            {/* Outer Squircle with Glow */}
            <div className="w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] bg-[#0A0A1F] rounded-[80px] lg:rounded-[120px] overflow-hidden relative shadow-[0_0_100px_rgba(255,159,13,0.15)]">
              <img
                src="/login.png"
                alt="Join Sanctuary"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[10s] ease-out opacity-80"
              />
              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/80 via-transparent to-white/5" />

              {/* Floating Label */}
              <div className="absolute bottom-12 left-12 right-12">
                <div className="h-px w-12 bg-[#FF9F0D] mb-6 opacity-60"></div>
                <h3 className="font-serif text-3xl lg:text-4xl text-white font-medium leading-tight text-right">
                  Join the elite <br />
                  <span className="italic text-[#FF9F0D]">Pack.</span>
                </h3>
              </div>
            </div>

            {/* Decorative Sparkles */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-[#FF9F0D] rounded-full blur-[2px] animate-pulse" />
            <div className="absolute bottom-20 -left-4 w-1.5 h-1.5 bg-white rounded-full blur-[1px] opacity-40 animate-pulse delay-700" />
          </div>
        </div>
      </AuthLayout>
    );
  }
