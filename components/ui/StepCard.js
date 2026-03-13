export default function StepCard({
  number,
  title,
  desc,
  icon,
  isActive,
  lineType,
}) {
  return (
    <div className="text-center relative flex flex-col items-center group">
      {/* Dashed Connecting SVG Lines */}
      {lineType && (
        <div className="hidden md:block absolute top-12 left-[55%] w-[90%] h-16 z-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 100 40"
            fill="none"
          >
            {lineType === "down" ? (
              <path
                d="M 10 10 Q 50 40 90 10"
                stroke="#1A1A1A"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="opacity-20"
                fill="none"
              />
            ) : (
              <path
                d="M 10 30 Q 50 0 90 30"
                stroke="#1A1A1A"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="opacity-20"
                fill="none"
              />
            )}
          </svg>
        </div>
      )}

      {/* Icon Container */}
      <div className="relative mb-8 w-full flex justify-center z-10">
        {/* Floating Step Number */}
        <div className="absolute top-0 left-1/2 -ml-14 -mt-2 w-7 h-7 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm z-20">
          <span className="font-serif text-[11px] font-medium text-[#1A1A1A]">
            {number}
          </span>
        </div>

        {/* Main Circle */}
        <div
          className={`w-[110px] h-[110px] rounded-full flex items-center justify-center transition-all duration-300
          ${
            isActive
              ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-50"
              : "bg-transparent border-[1.5px] border-dashed border-gray-200"
          }
        `}
        >
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center ${isActive ? "bg-[#187965]/5" : ""}`}
          >
            {icon}
          </div>
        </div>
      </div>

      {/* Content - Updated Typography */}
      <h3 className="font-serif text-xl md:text-2xl font-medium text-[#1A1A1A] mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-[260px]">
        {desc}
      </p>
    </div>
  );
}
