
"use client"
import React from 'react';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { FreeConsultation } from '@/components/sections/FreeConsultation';
import { Ritual } from '@/components/sections/Ritual';
import { NatureOffering } from '@/components/sections/NatureOffering';
import { LoveUnion } from '@/components/sections/LoveUnion';
import { Testimonials } from '@/components/sections/Testimonials';
import { Gallery } from '@/components/sections/Gallery';
import { Footer } from '@/components/sections/Footer';
import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton';

const App = () => {
  const whatsappLink = "https://wa.link/86hf6m";

  return (
    <div className="min-h-screen bg-[#0a0510] text-gray-100 font-sans selection:bg-[#d4af37] selection:text-black overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <FreeConsultation />
      <Ritual />
      <NatureOffering />
      <LoveUnion />
      <Testimonials />
      <Gallery />
      <Footer />
      <WhatsAppFloatingButton href={whatsappLink} />
    </div>
  );
};

export default App;
