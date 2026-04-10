import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden hero-clip bg-zinc-900">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Serene sunrise over Sri Lankan paddy fields" 
          className="w-full h-full object-cover opacity-70" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uiC7XK5IriDjhJLgM02AY1uBmQyG1dY4JwJqCk1KOac9WujfCZAH39X0yqGwMzFunMKDMxt6xEsyd_bAnd2VCLWMyvs_Zvf-hykmxieIxN45i0AaaCweZGx1DGpIp7pnM2AstL-p64ESssgG6hmN6lNHpMMi1pEIZQutMRgCleph5PB-e5HXjDR_aMvFboMq-1DWvpmMzPOSAr11a5ZGLvS7Xb0DiWYH5BhyzHgnW_3sXhUTlO5nM1-PY0AjL8Mc6rESStyC6hCTA"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white tracking-[0.2em] leading-none mb-4 uppercase">
          RANHELA
        </h1>
        <p className="font-work text-surface tracking-[0.4em] text-sm md:text-xl uppercase opacity-80">
          Authentic Sri Lankan Heritage
        </p>
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
