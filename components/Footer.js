import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
        {/* Newsletter Section - Premium Addition */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
            Stay in the loop
          </h3>
          <p className="text-white/40 text-sm font-light mb-6">
            Get grooming tips and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF9F0D]/50 transition-colors"
            />
            <button className="bg-[#FF9F0D] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#e68f0c] transition-colors inline-flex items-center justify-center gap-2">
              Subscribe
              <FaArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Brand Column - Desktop */}
          <div className="hidden md:block md:col-span-3">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.jpeg"
                  alt="UrbanFur"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-lg font-medium tracking-tight">
                Urban<span className="text-[#FF9F0D]">Fur</span>
              </span>
            </Link>
            <p className="text-white/40 text-xs font-light leading-relaxed mb-4 max-w-[200px]">
              Professional pet grooming at your doorstep.
            </p>
            <div className="flex gap-2.5">
              <SocialIcon icon={<FaFacebook size={13} />} />
              <SocialIcon icon={<FaTwitter size={13} />} />
              <SocialIcon icon={<FaInstagram size={13} />} />
              <SocialIcon icon={<FaLinkedin size={13} />} />
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] mb-4">
              Company
            </h3>
            <FooterLinks
              links={[
                { label: "About", href: "/about" },
                { label: "Groomers", href: "/groomers" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>

          {/* Services Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] mb-4">
              Services
            </h3>
            <FooterLinks
              links={[
                { label: "Bath & Brush", href: "/services" },
                { label: "Full Grooming", href: "/services" },
                { label: "Spa Treatment", href: "/services" },
                { label: "Nail Care", href: "/services" },
              ]}
            />
          </div>

          {/* Support Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] mb-4">
              Support
            </h3>
            <FooterLinks
              links={[
                { label: "Help Center", href: "/help" },
                { label: "Safety", href: "/safety" },
                { label: "Terms", href: "/terms" },
                { label: "Privacy", href: "/privacy" },
              ]}
            />
          </div>

          {/* Resources Links */}
          <div className="col-span-2 md:col-span-3">
            <h3 className="text-[10px] font-medium text-white/50 uppercase tracking-[0.2em] mb-4">
              Resources
            </h3>
            <FooterLinks
              links={[
                { label: "Blog", href: "/blog" },
                { label: "Grooming Guide", href: "/guide" },
                { label: "FAQs", href: "/faqs" },
                { label: "Community", href: "/community" },
              ]}
            />
          </div>
        </div>

        {/* Mobile Brand - Only on Mobile */}
        <div className="md:hidden flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg">
              <Image
                src="/logo.jpeg"
                alt="UrbanFur"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-serif text-base font-medium tracking-tight">
              Urban<span className="text-[#FF9F0D]">Fur</span>
            </span>
          </Link>
          <p className="text-white/40 text-xs font-light text-center max-w-[220px] mb-4">
            Professional pet grooming at your doorstep.
          </p>
          <div className="flex gap-2.5">
            <SocialIcon icon={<FaFacebook size={13} />} />
            <SocialIcon icon={<FaTwitter size={13} />} />
            <SocialIcon icon={<FaInstagram size={13} />} />
            <SocialIcon icon={<FaLinkedin size={13} />} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
            <p className="text-[10px] text-white/30 font-light order-2 md:order-1">
              © {new Date().getFullYear()} UrbanFur. All rights reserved.
            </p>
            <div className="flex gap-6 text-[10px] text-white/30 order-1 md:order-2">
              <Link
                href="/privacy"
                className="hover:text-[#FF9F0D] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#FF9F0D] transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-[#FF9F0D] transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/cookies"
                className="hover:text-[#FF9F0D] transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#FF9F0D] hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLinks({ links }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-white/40 text-xs font-light hover:text-[#FF9F0D] transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
