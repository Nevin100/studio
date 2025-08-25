"use client";

import { motion } from "framer-motion";
import { Code, Sword, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  const cards = [
    { 
      icon: Code, 
      title: "Builders", 
      body: "We’re the ones who dream in design files and wake up writing code. From late-night bug hunts to turning ☕ into <code>, we craft ideas into real-world solutions.",
      image: "/Stages-Of-Problem-Solving.png"
    },
    { 
      icon: Sword, 
      title: "Hackers", 
      body: "Adrenaline-fueled hackathons, all-nighters, and rapid-fire sprints—this is where crazy ideas meet execution. We break things fast, learn faster, and ship the unexpected.",
      image: "/hackathon.webp"
    },
    { 
      icon: Users, 
      title: "Collaborators", 
      body: "No silos, no ego. We team up with every department—design, AI/ML, Emerging Tech, you name it—to build things that actually solve problems, not just look good on slides.",
      image: "/colab.png"
    },
    { 
      icon: BookOpen, 
      title: "Learners", 
      body: "Curiosity is our fuel. Workshops, peer-to-peer reviews, deep dives, and live code walkthroughs keep us growing together—because the best projects are born from shared knowledge.",
      image: "/learning.png"
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-code text-primary mb-2">
          >>Readme.md
        </h2>
        <p className="text-lg text-muted-foreground">
          We're more than just a club. We're a crew. 🚀
        </p>
      </div>

      <div className="space-y-20">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={card.image}
                alt={card.title}
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/10">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <card.icon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl font-bold font-code">{card.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
