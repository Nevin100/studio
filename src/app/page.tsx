"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import BeforeAfter from "@/components/sections/before-after";
import Achievements from "@/components/sections/achievements";
import Departments from "@/components/sections/departments";
import Projects from "@/components/sections/projects";
import WhyJoin from "@/components/sections/why-join";
import Join from "@/components/sections/join";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray("section");
    sections.forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <BeforeAfter />
        <Achievements />
        <Departments />
        <Projects />
        <WhyJoin />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
