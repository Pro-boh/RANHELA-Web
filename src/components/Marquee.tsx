import { Sprout } from 'lucide-react';

export default function Marquee() {
  const items = [
    "Ethically Sourced from Sri Lanka",
    "100% Organic & Natural",
    "Traditional Heritage Grains",
    "Supporting Local Farmers"
  ];

  return (
    <div className="w-full overflow-hidden bg-[#94a187] py-6 border-y border-white/10 flex items-center relative z-10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className="font-poppins font-medium text-white/90 text-sm tracking-[0.25em] uppercase whitespace-nowrap">
                  {item}
                </span>
                <Sprout className="text-white/40 w-4 h-4" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
