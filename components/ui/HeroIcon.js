// ui/HeroIcon.jsx
export default function HeroIcon({ icon, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-white/70">{icon}</div>
      <span className="text-white/70 text-sm font-medium">{label}</span>
    </div>
  );
}
