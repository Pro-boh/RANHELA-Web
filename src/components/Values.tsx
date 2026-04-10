import { ShieldCheck, Landmark, Leaf, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const values = [
  {
    icon: ShieldCheck,
    title: "Purity",
    description: "Certified organic and 100% pure ingredients.",
    bgImage: "https://i.imgur.com/jlprAfX.jpeg"
  },
  {
    icon: Landmark,
    title: "Heritage",
    description: "Rooted in ancient Sri Lankan traditions.",
    bgImage: "https://i.imgur.com/S4YFDSl.jpeg"
  },
  {
    icon: Leaf,
    title: "Natural",
    description: "Raw, plant-based and minimally processed.",
    bgImage: "https://i.imgur.com/C6iKXUH.jpeg"
  },
  {
    icon: HeartHandshake,
    title: "Sustainably Sourced",
    description: "Ethically harvested by local farming communities.",
    bgImage: "https://i.imgur.com/EwshKrL.png"
  }
];

export default function Values() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center items-center">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ 
                scale: hoveredIndex === index ? 1.25 : (hoveredIndex === null ? 1 : 0),
                opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0,
                y: hoveredIndex !== null && hoveredIndex !== index ? 40 : 0,
                pointerEvents: hoveredIndex !== null && hoveredIndex !== index ? 'none' : 'auto'
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 25,
                opacity: { duration: 0.3 }
              }}
              className="flex flex-col items-center group cursor-pointer relative z-20"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mb-6 shadow-sm border border-on-surface/5 transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl">
                <value.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-container" />
              </div>
              <h3 className="font-work font-medium text-sm tracking-widest uppercase mb-2 text-zinc-800 transition-colors group-hover:text-primary">
                {value.title}
              </h3>
              <p className="font-work text-xs leading-relaxed max-w-[150px] text-zinc-500 opacity-70">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Heritage Image with Hover Interaction */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredIndex ?? 'idle'}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: hoveredIndex !== null ? 1 : 0.03,
              scale: hoveredIndex !== null ? 1.1 : 1
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <img 
              alt="Heritage Background" 
              className="w-full h-full object-cover" 
              src={hoveredIndex !== null ? values[hoveredIndex].bgImage : values[0].bgImage}
              referrerPolicy="no-referrer"
            />
            {/* Overlay to ensure text readability when image is at full opacity */}
            <motion.div 
              animate={{ opacity: hoveredIndex !== null ? 0.4 : 0 }}
              className="absolute inset-0 bg-white/30"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
