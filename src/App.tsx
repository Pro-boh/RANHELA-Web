/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import Marquee from './components/Marquee';
import Storytelling from './components/Storytelling';
import Values from './components/Values';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Navbar />
      <main className="flex-grow">
        <ProductCarousel />
        <Marquee />
        <Storytelling />
        <div className="max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-on-surface/10 to-transparent my-12"></div>
        <Values />
        <div className="max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-on-surface/10 to-transparent my-12"></div>
      </main>
      <Footer />
    </div>
  );
}
