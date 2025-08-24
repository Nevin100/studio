"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const Hero = ({ isBad = false }: { isBad?: boolean }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    if (isBad) return;
    const ctx = gsap.context(() => {
      gsap.from(".terminal-line", {
        delay: 0.5,
        y: 12,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(".cursor", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }, componentRef);
    return () => ctx.revert();
  }, [isBad]);

  const terminalLines = [
    "$ echo \"Hello, World!\"",
    "› Spinning up ideas → shipping products",
    "› sudo join geekroom-webdev --yes",
  ];

  if (isBad) {
    return (
      <div>
        <h1 style={{ fontSize: "3rem", color: "lime" }}>Web Development Society</h1>
        <h2 style={{ fontSize: "1.5rem", color: "fuchsia" }}>Building the Web, Building the Future</h2>
        <p style={{ marginTop: "20px", color: "silver", fontSize: "12px" }}>We are the architects of the digital frontier, a community of developers, designers, and innovators at GeekRoom dedicated to building the web's future, one line of code at a time.</p>
        <div style={{ background: "black", border: "1px solid #333", padding: "1rem", marginTop: "2rem", fontFamily: "monospace" }}>
          {terminalLines.map((line, i) => <p key={i}>{line}</p>)}
          <span>▋</span>
        </div>
        <a href="#join" style={{ display: "inline-block", background: "blue", color: "white", padding: "10px 25px", marginTop: "25px" }}>Join the Crew</a>
      </div>
    );
  }

  return (
    <motion.section
      id="home"
      ref={componentRef}
      className="relative container mx-auto px-4 min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
        <div className="relative z-10">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
      >
        Web Development Society
        <br />
        <span className="text-primary">Building the Web, Building the Future</span>
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
      >
        We are the architects of the digital frontier, a community of developers, designers, and innovators at GeekRoom dedicated to building the web's future, one line of code at a time.
      </motion.p>

      <motion.div 
        className="font-code text-left max-w-xl mx-auto bg-card/50 p-6 rounded-lg border border-border/50 shadow-lg backdrop-blur-md"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
      >
        {terminalLines.map((line, index) => (
          <p key={index} className="terminal-line text-muted-foreground">
            <span className={line.startsWith("$") ? "text-green-400" : "text-accent"}>{line.split(" ")[0]}</span>
            {' '}
            {line.substring(line.indexOf(" ") + 1)}
          </p>
        ))}
        <div className="h-6"><span className="cursor text-primary text-2xl">▋</span></div>
      </motion.div>
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 1 }}
      >
        <Button size="lg" className="mt-12" asChild>
            <a href="#join">Join the Crew</a>
        </Button>
      </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
