"use client";

import { motion } from "framer-motion";
import { Code, Sword, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const cards = [
    { icon: Code, title: "Builders", body: "Designers, coders & problem-solvers turning ☕ into <code>." },
    { icon: Sword, title: "Hackers", body: "Intra & inter-college hackathons, sprints and ship nights." },
    { icon: Users, title: "Collaborators", body: "We pair with every department to ship real solutions." },
    { icon: BookOpen, title: "Learners", body: "Workshops, peer reviews, code walkthroughs & demos." },
  ];

  const cardVariants = {
    hidden: { scale: 0.96, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 14,
      },
    },
  };

  return (
    <section id="about" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-code text-primary mb-2">
          >>Readme.md
        </h2>
        <p className="text-muted-foreground">We're more than just a club. We're a crew.</p>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {cards.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <card.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl font-bold font-code">{card.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{card.body}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
