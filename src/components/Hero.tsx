import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export default function Hero() {
  const { scrollY } = useScroll();
  const [showTitle, setShowTitle] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200) {
      setShowTitle(false);
    } else {
      setShowTitle(true);
    }
  });

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden hero-clip bg-zinc-900">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Serene sunrise over Sri Lankan paddy fields" 
          className="w-full h-full object-cover opacity-100" 
          src="https://i.imgur.com/X0WNCkg.jpeg"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        {showTitle && (
          <motion.h1 
            layoutId="brand-title"
            className="font-serif text-5xl md:text-8xl lg:text-9xl text-white tracking-[0.2em] leading-none mb-4 uppercase"
          >
            RANHELA
          </motion.h1>
        )}
        <motion.p 
          animate={{ opacity: showTitle ? 0.8 : 0 }}
          className="font-work text-surface tracking-[0.4em] text-sm md:text-xl uppercase"
        >
          Authentic Sri Lankan Heritage
        </motion.p>
      </motion.div>


      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-white w-8 h-8 md:w-10 md:h-10 opacity-70" />
      </motion.div>
    </section>
  );
}
