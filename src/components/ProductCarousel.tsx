import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: "Moringa Powder",
    description: "Organic Superfood",
    weight: "250g",
    price: 22.00,
    tag: "Organic",
    image: "https://i.imgur.com/MFkVBda.png",
    hoverBg: "group-hover:bg-[#4a5d23]",
    accent: "text-[#4a5d23]"
  },
  {
    id: 2,
    name: "Kiri Naran Rice",
    description: "Pure Heritage Spice",
    weight: "100g",
    price: 18.50,
    tag: "Heritage",
    image: "https://i.imgur.com/KkHrYbw.png",
    hoverBg: "group-hover:bg-[#5c3c24]",
    accent: "text-[#5c3c24]"
  },
  {
    id: 3,
    name: "Ceylon Turmeric Powder",
    description: "High Curcumin Content",
    weight: "100g",
    price: 12.00,
    tag: "Bestseller",
    image: "https://i.imgur.com/nx95gtA.png",
    hoverBg: "group-hover:bg-[#e5ac40]",
    accent: "text-[#e5ac40]"
  },
  {
    id: 4,
    name: "Organic Cinnamon Sticks",
    description: "Pure Ceylon Cinnamon",
    weight: "100g",
    price: 15.00,
    tag: "Organic",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEpUtk7dOn_CrH68EZIIk_Ky6fjkT6fXYTtj1F9YG14mXAqYkBZAhrGbAeg540L2h3KRZTxwhSgCUQtV-ip3RpwfZ0FlUM5fCWTnE4FdmWU1mzbcUbg-3Jn36HNUblc4xaNIj_8EhJt0Iq076P8UYVXK5hQRFYGg0a_NF8VYw41uJ13-yVnD9v0laXZe7p6MRx4E3tmZPl94rNsoVyvsGYc6axrj4TyDrLaIsl2sGHmTCZvjbR81nPzgbR5vOj3Ap8o0_hzhBl4DwC",
    hoverBg: "group-hover:bg-[#5c3c24]",
    accent: "text-[#5c3c24]"
  }
];

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [addedItems, setAddedItems] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const secondChild = scrollRef.current.children[1] as HTMLElement;
      
      if (firstChild && secondChild) {
        // Calculate distance between starts of items (width + gap)
        const itemSpacing = secondChild.offsetLeft - firstChild.offsetLeft;
        const index = Math.round(scrollLeft / itemSpacing);
        setActiveIndex(index);
      } else if (firstChild) {
        setActiveIndex(0);
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const secondChild = scrollRef.current.children[1] as HTMLElement;
      
      if (firstChild && secondChild) {
        const itemSpacing = secondChild.offsetLeft - firstChild.offsetLeft;
        scrollRef.current.scrollTo({ left: index * itemSpacing, behavior: 'smooth' });
      } else if (firstChild) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const nextIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1) 
      : Math.min(products.length - 1, activeIndex + 1);
    scrollToIndex(nextIndex);
  };

  const toggleAddToCart = (id: number) => {
    setAddedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <section className="py-8 relative overflow-hidden bg-background">
      <div className="px-4 md:px-8 max-w-7xl mx-auto relative">
        <div className="flex justify-between items-end mb-8 px-4">
          <div className="group cursor-default">
            <h2 className="font-serif text-2xl md:text-3xl text-on-surface">Best Selling Products</h2>
            <div className="h-0.5 w-16 bg-primary-container mt-2 group-hover:w-24 transition-all duration-500"></div>
          </div>
          <a className="font-serif italic text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all duration-300" href="#">
            View the full ledger
          </a>
        </div>

        {/* Navigation Buttons - Positioned relative to the product(s) */}
        <div className="absolute top-[55%] -translate-y-1/2 left-2 md:left-0 lg:left-4 z-20">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-on-surface/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-white shadow-xl disabled:opacity-20 disabled:cursor-not-allowed"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
        <div className="absolute top-[55%] -translate-y-1/2 right-2 md:right-0 lg:right-4 z-20">
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-on-surface/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-white shadow-xl disabled:opacity-20 disabled:cursor-not-allowed"
            disabled={activeIndex >= products.length - (isMobile ? 1 : 3)}
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory scroll-smooth"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -8 }}
              className="min-w-full md:min-w-[33.33%] snap-center md:snap-start flex justify-center group"
            >
              <div className="w-full max-w-[280px] md:max-w-[320px] px-2 md:px-4 h-full">
                <div className={`relative flex flex-col h-full bg-zinc-50/50 ${product.hoverBg} transition-all duration-700 rounded-2xl overflow-hidden border border-zinc-100 group-hover:border-transparent p-0 shadow-sm group-hover:shadow-2xl`}>
                  {/* Image Container - Full Width & Flush Top */}
                  <div className="relative w-full aspect-[4/5] flex items-center justify-center overflow-hidden bg-white/40 group-hover:bg-white/20 transition-all duration-700">
                    {/* Tag Overlay */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full font-jakarta text-[9px] font-bold uppercase tracking-widest shadow-sm border border-primary/10 group-hover:bg-white group-hover:text-on-surface transition-colors duration-500">
                        {product.tag}
                      </span>
                    </div>

                    <img 
                      alt={product.name} 
                      className="w-full h-full object-cover scale-[1.35] group-hover:scale-[1.45] transition-transform duration-[1.5s] ease-out" 
                      src={product.image}
                      referrerPolicy="no-referrer"
                    />
                    {/* Bottom Shadow Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                  
                  {/* Content - Padded separately */}
                  <div className="flex flex-col flex-grow text-center p-6 pt-5">
                    <div className="mb-4 mt-[1px]">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-jakarta mb-1 group-hover:text-white/60 transition-colors duration-500">Exporting Global</p>
                      <h3 className="font-serif text-xl md:text-2xl text-on-surface mb-1 group-hover:text-white transition-colors duration-500 leading-tight uppercase tracking-wide">
                        {product.name}
                      </h3>
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 group-hover:bg-white/20 text-[#5e1c1c] group-hover:text-white text-[9px] font-bold tracking-widest uppercase transition-colors duration-500">
                        Net Weight: {(product as any).weight}
                      </div>
                    </div>

                    <div className="mt-auto flex justify-between items-center gap-2 pt-4 border-t border-zinc-100 group-hover:border-white/10 transition-colors duration-500">
                      <div className="flex flex-col gap-2 items-start">
                        <button 
                          onClick={() => toggleAddToCart(product.id)}
                          className={`text-[10px] px-5 py-2 rounded-full font-poppins font-bold tracking-widest uppercase flex items-center justify-center transition-all duration-500 shadow-sm w-full ${
                            addedItems.includes(product.id) 
                              ? 'bg-[#c8674b] text-white scale-95' 
                              : 'bg-primary text-white hover:bg-white hover:text-primary group-hover:bg-white group-hover:text-on-surface'
                          }`}
                        >
                          {addedItems.includes(product.id) ? 'Added' : 'Buy'}
                        </button>
                        <button className="text-[10px] px-5 py-2 rounded-full font-poppins font-bold tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-sm group-hover:border-white group-hover:text-white w-full">
                          Details
                        </button>
                      </div>

                      <div className="text-right flex flex-col items-end">
                        <span className={`text-ledger text-base font-bold ${product.accent} group-hover:text-white transition-colors duration-500`}>
                          LKR {(product.price * 300).toLocaleString()}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-work group-hover:text-white/80 transition-colors duration-500 leading-none mb-1">
                          approx. ${product.price.toFixed(2)}
                        </span>
                        <span className="text-[8px] text-zinc-400 font-work group-hover:text-white/60 transition-colors duration-500 leading-none uppercase tracking-tighter">
                          VAT included
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className="group relative h-3 flex items-center"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                animate={{
                  width: activeIndex === index ? 16 : 6,
                  backgroundColor: activeIndex === index ? '#e5ac40' : '#d1c5b4',
                }}
                className="h-1.5 rounded-full transition-colors duration-300"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
