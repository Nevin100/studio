"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Join", href: "#join" },
  ];

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkProps = {
    whileHover: { scale: 1.04, color: "hsl(var(--primary))" },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <>
      <motion.nav
        ref={navbarRef}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-xl" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-[72px]">
          <a href="#home" className="flex items-center gap-2">
            <Logo />
            <span className="font-bold text-lg hidden sm:block">GeekRoom WebDev</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a key={item.label} href={item.href} {...navLinkProps} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild>
              <motion.a href="#join" {...navLinkProps}>Join</motion.a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              <Menu />
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-card p-6 z-50 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold">Menu</span>
                <Button onClick={toggleMenu} variant="ghost" size="icon">
                  <X />
                </Button>
              </div>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={toggleMenu} className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </a>
                ))}
                <Button asChild size="lg" className="mt-4">
                  <a href="#join" onClick={toggleMenu}>Join</a>
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;