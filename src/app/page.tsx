"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import WhatWeDo from "@/components/sections/what-we-do";
import Roadmap from "@/components/sections/roadmap";
import WhyJoin from "@/components/sections/why-join";
import Join from "@/components/sections/join";
import BeforeAfter from "@/components/sections/before-after";

const GridBackground = () => (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div
        className="absolute inset-0 bg-background"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--primary) / 0.03), transparent 2px), linear-gradient(90deg, hsl(var(--primary) / 0.03), transparent 2px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 0 0',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    </div>
  );

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <GridBackground />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhatWeDo />
        <BeforeAfter />
        <Roadmap />
        <WhyJoin />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
