export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#050505] to-[#1E1B4B] relative overflow-hidden flex items-center justify-center font-inter tracking-tight">
      {/* Golden Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF9F0D]/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF9F0D]/5 rounded-full blur-[100px] animate-pulse delay-1000" />

      {/* Noise Texture Overlay for depth */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center p-4 md:p-8">
        {children}
      </div>
    </div>
  );
}
