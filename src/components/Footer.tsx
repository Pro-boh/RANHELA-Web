import { Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface/50 backdrop-blur-sm w-full py-20 px-4 md:px-8 border-t border-on-surface/10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="font-serif text-2xl tracking-widest text-primary uppercase">
            RANHELA
          </div>
          <p className="font-work text-zinc-500 max-w-xs leading-relaxed">
            Preserving the soul of Sri Lanka through the fine art of organic curation. From the mountains to your sanctuary.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="font-serif text-lg text-on-surface mb-8">Navigation</h4>
          <div className="grid grid-cols-2 gap-4">
            {['Sustainability', 'Shipping', 'Returns', 'Contact Us', 'Stockists', 'Journal'].map((link) => (
              <a 
                key={link} 
                className="font-work text-zinc-500 hover:text-primary-container transition-all duration-300 relative group w-fit" 
                href="#"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-container transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-serif text-lg text-on-surface mb-8">The Curator's Letter</h4>
          <p className="font-work text-sm text-zinc-500 mb-6">Subscribe to receive heritage stories and exclusive collection access.</p>
          <div className="flex border-b border-zinc-300 pb-2 focus-within:border-primary transition-colors">
            <input 
              className="bg-transparent border-none focus:outline-none w-full font-work text-sm px-0 placeholder:text-zinc-400" 
              placeholder="Your email address" 
              type="email" 
            />
            <button className="text-primary font-serif italic text-sm hover:scale-105 transition-transform">Join</button>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-zinc-200/50 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-work text-[10px] md:text-xs text-zinc-400 tracking-widest uppercase">
          © 2024 Ranhela Heritage Curator. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-zinc-400">
          <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          <Mail className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>
    </footer>
  );
}
