"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const terminalLines = [
    "$ echo \"Hello, World!\"",
    "› Spinning up ideas → shipping products",
    "› sudo join geekroom-webdev --yes",
  ];

  const componentRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <motion.section
      id="home"
      ref={componentRef}
      className="relative container mx-auto px-4 min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%236EE7FF' stroke-width='0.5'%3E%3Cpath d='M-500 75c0 0 125-37.5 250 0S0 225 0 225s125 75 250 0s250-150 250-150s125-37.5 250 0s250 150 250 150s125 75 250 0'/%3E%3Cpath d='M-500 225c0 0 125-37.5 250 0S0 375 0 375s125 75 250 0s250-150 250-150s125-37.5 250 0s250 150 250 150s125 75 250 0'/%3E%3Cpath d='M-500 375c0 0 125-37.5 250 0S0 525 0 525s125 75 250 0s250-150 250-150s125-37.5 250 0s250 150 250 150s125 75 250 0'/%3E%3Cpath d='M-500 525c0 0 125-37.5 250 0S0 675 0 675s125 75 250 0s250-150 250-150s125-37.5 250 0s250 150 250 150s125 75 250 0'/%3E%3Cpath d='M-500 675c0 0 125-37.5 250 0S0 825 0 825s125 75 250 0s250-150 250-150s125-37.5 250 0s250 150 250 150s125 75 250 0'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
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
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
        Terminal • VS Code • Dark Mode • Geeky Vibes
      </p>

      <div className="font-code text-left max-w-xl mx-auto bg-card/50 p-6 rounded-lg border border-border/50 shadow-lg backdrop-blur-md">
        {terminalLines.map((line, index) => (
          <p key={index} className="terminal-line text-muted-foreground">
            <span className={line.startsWith("$") ? "text-green-400" : "text-accent"}>{line.split(" ")[0]}</span>
            {' '}
            {line.substring(line.indexOf(" ") + 1)}
          </p>
        ))}
        <div className="h-6"><span className="cursor text-primary text-2xl">▋</span></div>
      </div>
      
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
