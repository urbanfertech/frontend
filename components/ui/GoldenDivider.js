export default function GoldenDivider({
  variant = "solid", // "solid", "dashed", "dotted", "gradient"
  size = "default", // "small", "default", "large"
  orientation = "horizontal", // "horizontal", "vertical"
  withIcon = false,
  icon: Icon,
  className = "",
}) {
  // Size mappings
  const sizes = {
    horizontal: {
      small: "w-16",
      default: "w-24",
      large: "w-32",
    },
    vertical: {
      small: "h-8",
      default: "h-12",
      large: "h-16",
    },
  };

  // Variant styles
  const variants = {
    solid: "border-t border-[#FF9F0D]",
    dashed: "border-t-2 border-dashed border-[#FF9F0D]",
    dotted: "border-t-2 border-dotted border-[#FF9F0D]",
    gradient:
      "h-px bg-gradient-to-r from-transparent via-[#FF9F0D] to-transparent",
  };

  const verticalVariants = {
    solid: "border-l border-[#FF9F0D]",
    dashed: "border-l-2 border-dashed border-[#FF9F0D]",
    dotted: "border-l-2 border-dotted border-[#FF9F0D]",
    gradient:
      "w-px bg-gradient-to-b from-transparent via-[#FF9F0D] to-transparent",
  };

  if (orientation === "vertical") {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div
          className={`${verticalVariants[variant]} ${sizes.vertical[size]}`}
          aria-hidden="true"
        />
      </div>
    );
  }

  // Horizontal with optional icon
  if (withIcon && Icon) {
    return (
      <div className={`flex items-center justify-center gap-3 ${className}`}>
        <div className={`${variants.solid} flex-1`} />
        <div className="text-[#FF9F0D]">
          <Icon className="w-4 h-4" />
        </div>
        <div className={`${variants.solid} flex-1`} />
      </div>
    );
  }

  // Simple horizontal
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${variants[variant]} ${sizes.horizontal[size]}`} />
    </div>
  );
}
