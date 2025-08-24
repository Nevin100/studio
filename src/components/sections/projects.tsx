"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const cards = [
    { title: "Hackathon Hub", tag: "Next.js", desc: "Reg, teams, leaderboard, live", link: "#" },
    { title: "Geekroom Portal", tag: "React", desc: "Announcements + resources", link: "#" },
    { title: "Event Ticketing", tag: "Node", desc: "QR + payments", link: "#" },
    { title: "Docs Theme", tag: "Vite", desc: "MDX + search", link: "#" },
    { title: "API Service", tag: "Go", desc: "High-performance microservice", link: "#" },
    { title: "Discord Bot", tag: "Python", desc: "Automated roles & events", link: "#" },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1096],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  const cardHover = {
    y: -8,
    scale: 1.03,
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-code text-primary mb-2">
          projects/
        </h2>
        <p className="text-muted-foreground">A glimpse of what we've built.</p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <motion.div className="flex gap-8 py-4" variants={marqueeVariants} animate="animate">
          {[...cards, ...cards].map((card, index) => (
            <motion.div key={index} whileHover={cardHover} className="flex-shrink-0" style={{width: '250px'}}>
              <Card className="w-full h-full bg-card/50 hover:border-accent transition-all duration-300">
                <a href={card.link} className="block h-full">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.desc}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <Badge variant="secondary" className="font-code bg-secondary/20 text-secondary">{card.tag}</Badge>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </CardFooter>
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  );
};

export default Projects;
