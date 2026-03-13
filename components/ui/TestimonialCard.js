import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ name, role }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left">
      <div className="flex text-[#FF9F0D] mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={14} />
        ))}
      </div>

      <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
        &quot;UrbanFur made grooming stress-free. The groomer was professional and gentle.&quot;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#FF9F0D] font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}