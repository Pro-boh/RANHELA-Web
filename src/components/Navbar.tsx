import { ShoppingCart, Search, Menu } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [showTitle, setShowTitle] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200) {
      setShowTitle(true);
    } else {
      setShowTitle(false);
    }
  });

  return (
    <nav className="sticky top-0 w-full z-50 flex items-center px-4 md:px-8 py-4 transition-all duration-500 ghost-shadow border-b bg-primary-container border-primary-container">
      {/* Left Column: Logo & Links */}
      <div className="flex-1 flex items-center gap-4 md:gap-6">
        <img 
          alt="RANHELA LANKA brand crest logo" 
          className="w-8 h-8 md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-300" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uh7k8wm6F4fCVNTp5grYqN83lRj_YVkYfaR_U6K3tjUSeNwhWNRxZObkIITEnY3c8KU5EznDWQywMohRwf1dJY39vr1hQ25R8eGIfbktVah7St9QyTq9FBdWWOrY3xfAul8_1PR1IFqsJ5fv4TdwaM-d912AEVuA1O-9z2-bCK-dWWZ1m71D3j8Cq5zm49AUKVe1BhWoUsWpbVC36dtzpIWzX-2eDTLjlpu2l1qQAuSFn_IYVWg1JaeyXn8me6mg4db8G_17pw-34o"
          referrerPolicy="no-referrer"
        />
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a className="font-work text-sm tracking-widest text-[#f5f2e9] font-bold relative whitespace-nowrap" href="#">
            Home
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#f5f2e9] rounded-full"></span>
          </a>
          <a className="font-work text-sm tracking-widest text-[#f5f2e9] hover:opacity-80 transition-opacity relative group whitespace-nowrap" href="#">
            Collections
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#f5f2e9] transition-all group-hover:w-full"></span>
          </a>
          <a className="font-work text-sm tracking-widest text-[#f5f2e9] hover:opacity-80 transition-opacity relative group whitespace-nowrap" href="#">
            About
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#f5f2e9] transition-all group-hover:w-full"></span>
          </a>
          <a className="font-work text-sm tracking-widest text-[#f5f2e9] hover:opacity-80 transition-opacity relative group whitespace-nowrap" href="#">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#f5f2e9] transition-all group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Center Column: Brand */}
      <div className="flex-none px-4 min-w-[120px] flex justify-center">
        {showTitle && (
          <motion.span 
            layoutId="brand-title"
            className="text-xl md:text-2xl font-serif tracking-[0.2em] text-[#5e1c1c] uppercase whitespace-nowrap"
          >
            RANHELA
          </motion.span>
        )}
      </div>


      {/* Right Column: Trailing Actions */}
      <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
        <button className="md:hidden text-[#f5f2e9]">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden lg:flex items-center border-b border-[#f5f2e9]/30 py-1 focus-within:border-[#f5f2e9] transition-colors">
          <input 
            className="bg-transparent border-none focus:outline-none text-sm font-work w-24 xl:w-40 placeholder-[#f5f2e9]/50 text-[#f5f2e9]" 
            placeholder="Search heritage..." 
            type="text" 
          />
          <Search className="w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity text-[#f5f2e9]" />
        </div>
        <div className="relative cursor-pointer group">
          <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-[#f5f2e9] hover:opacity-80 transition-opacity" />
          <span className="absolute -top-1 -right-1 bg-[#5e1c1c] text-white text-[10px] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform">0</span>
        </div>
      </div>
    </nav>
  );
}
