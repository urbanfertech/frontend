"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-white py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg group-hover:scale-105 transition-transform">
            <Image
              src="/logo.jpeg"
              alt="UrbanFur Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-serif font-medium text-slate-800 tracking-tight">
            Urban<span className="text-golden">Fur</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/how-it-works">How It Works</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/groomers">Groomers</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/community">Community</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:block text-sm font-medium text-slate-600 hover:text-golden px-3 py-2 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-golden text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-amber-600 transition-colors shadow-sm hover:shadow"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-slate-600 hover:text-golden px-4 py-2 rounded-md transition-colors"
    >
      {children}
    </Link>
  );
}
