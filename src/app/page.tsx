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
  <div style={{ fontFamily: "Comic Sans MS, cursive", padding: "1rem", color: "#eee", background: "#222" }}>
    <header style={{ border: "2px dashed red", padding: "10px", marginBottom: "20px" }}>
      <h1 style={{ fontSize: "48px", color: "yellow", textAlign: "center" }}>GeekRoom WebDev</h1>
      <nav style={{ textAlign: "center", marginTop: "10px" }}>
        <a href="#home" style={{ margin: "0 15px", color: "cyan", fontSize: "12px" }}>Home</a>
        <a href="#about" style={{ margin: "0 15px", color: "cyan", fontSize: "18px" }}>>>Readme.md</a>
        <a href="#what-we-do" style={{ margin: "0 15px", color: "cyan", fontSize: "14px" }}>./what_we_do.sh</a>
        <a href="#before-after" style={{ margin: "0 15px", color: "cyan", fontSize: "20px" }}>before_after.js</a>
        <a href="#roadmap" style={{ margin: "0 15px", color: "cyan", fontSize: "12px" }}>CONTRIBUTING.md</a>
        <a href="#why-join" style={{ margin: "0 15px", color: "cyan", fontSize: "16px" }}>why_join_us.md</a>
      </nav>
    </header>
    
    <main style={{ padding: "0 25px" }}>
      <div style={{ marginBottom: "50px", border: "1px solid green", padding: "15px" }}>
        <Hero isBad />
      </div>
      <div style={{ marginBottom: "40px", border: "1px solid orange", padding: "25px" }}>
        <About isBad />
      </div>
      <div style={{ marginBottom: "60px", border: "1px solid fuchsia", padding: "5px" }}>
        <WhatWeDo isBad />
      </div>
      <div style={{ marginBottom: "30px", border: "1px solid blue", padding: "35px" }}>
        <BeforeAfter isBad />
      </div>
      <div style={{ marginBottom: "55px", border: "1px solid yellow", padding: "12px" }}>
        <Roadmap isBad />
      </div>
      <div style={{ marginBottom: "45px", border: "1px solid cyan", padding: "28px" }}>
        <WhyJoin isBad />
      </div>
      <div style={{ marginBottom: "50px", border: "1px solid lime", padding: "20px" }}>
        <Join isBad />
      </div>
    </main>

    <footer style={{ borderTop: "5px solid blue", marginTop: "50px", paddingTop: "20px", textAlign: "center", fontSize: "10px" }}>
      <p>© 2024 GeekRoom WebDev. All Rights Reserved. Probably.</p>
    </footer>
    
    <Button
      onClick={onGoodDesign}
      className="fixed bottom-4 right-4"
      style={{ 
        backgroundColor: 'lime', 
        color: 'black', 
        border: '2px solid black', 
        borderRadius: '0',
        fontFamily: '"Courier New", monospace',
        fontSize: "18px"
      }}
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
