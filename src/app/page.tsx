"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import WhatWeDo from "@/components/sections/what-we-do";
import Roadmap from "@/components/sections/roadmap";
import WhyJoin from "@/components/sections/why-join";
import Join from "@/components/sections/join";
import BeforeAfter from "@/components/sections/before-after";
import { Button } from "@/components/ui/button";

const GridBackground = () => (
  <div className="fixed top-0 left-0 w-full h-full -z-10">
    <div
      className="absolute inset-0 bg-background"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary) / 0.03), transparent 2px), linear-gradient(90deg, hsl(var(--primary) / 0.03), transparent 2px)",
        backgroundSize: "32px 32px",
        backgroundPosition: "0 0, 0 0",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
  </div>
);

const BadDesign = ({ onGoodDesign }: { onGoodDesign: () => void }) => (
  <div style={{ fontFamily: "monospace", padding: "2rem", color: "#ccc" }}>
    <h1>GeekRoom WebDev Society</h1>
    <p>We build stuff.</p>
    <h2>Sections</h2>
    <ul>
      <li>About</li>
      <li>What We Do</li>
      <li>Roadmap</li>
      <li>Why Join</li>
      <li>Join</li>
    </ul>
    <Button
      onClick={onGoodDesign}
      className="fixed bottom-4 right-4"
    >
      git add design
    </Button>
  </div>
);

const GoodDesign = () => (
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

export default function Home() {
  const [isStyled, setIsStyled] = useState(false);

  if (!isStyled) {
    return <BadDesign onGoodDesign={() => setIsStyled(true)} />;
  }

  return <GoodDesign />;
}