import { motion } from 'motion/react';

export default function Storytelling() {
  return (
    <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative min-h-[80vh] flex flex-col justify-center">
      <div className="relative w-full">
        {/* Heritage Motif - Repositioned to be inline with content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-16 left-0 w-16 md:w-24 lg:w-32 pointer-events-none z-0"
        >
          <img 
            src="https://i.imgur.com/MOie6w1.png" 
            alt="Heritage Motif" 
            className="w-full h-auto opacity-30"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="ml-auto w-full md:w-3/4 lg:w-3/5 relative mb-32 md:mb-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-video bg-surface-container-low overflow-hidden shadow-2xl group -translate-y-12 md:translate-y-0"
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-20 md:-bottom-12 bg-white/95 backdrop-blur-md p-6 md:p-8 ghost-shadow max-w-xs border border-on-surface/5 z-20 right-4 md:-right-12"
          >
            <span className="font-jakarta text-xs uppercase tracking-widest text-primary mb-2 block">Sustainability First</span>
            <p className="font-work text-sm text-on-surface-variant italic">
              Showing how traditional Sri Lankan ingredients can seamlessly integrate into and elevate a modern global lifestyle.
            </p>
          </motion.div>
        </div>

        <div className="relative md:-mt-24 lg:-mt-32 max-w-2xl z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-on-surface mb-8 leading-tight"
          >
            Ancient grains <span className="font-serif italic text-2xl md:text-4xl opacity-60 lowercase pl-2 mr-[2px]">for</span> <br/>
            <span className="italic text-primary">modern vitality.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-work text-on-surface-variant leading-relaxed text-lg mb-8"
          >
            Focusing on the exotic and authentic provenance of Sri Lankan ingredients to appeal to the European market's desire for rare, high-quality, and ethically sourced natural products.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-10 py-4 font-poppins text-sm tracking-[0.2em] uppercase hover:shadow-lg transition-all"
          >
            Discover the Origin
          </motion.button>
        </div>
      </div>
    </section>
  );
}
