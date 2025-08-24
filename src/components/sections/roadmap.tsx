"use client";

import { motion } from "framer-motion";
import { Map, Code, GitMerge, Users, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Roadmap = () => {
  const steps = [
    { icon: Code, title: "1. Master the Basics", body: "Learn HTML, CSS, JavaScript, and React. We have resources and workshops to get you started." },
    { icon: GitMerge, title: "2. Learn Git & Next.js", body: "Understand version control with Git and dive into our primary framework, Next.js." },
    { icon: Users, title: "3. Contribute to Projects", body: "Join an internal project. It's the best way to learn, collaborate, and build your portfolio." },
    { icon: Rocket, title: "4. Ship & Specialize", body: "Deploy your work! Explore advanced topics like backend, databases, or UI/UX design." },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 14,
      },
    },
  };

  return (
    <section id="roadmap" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-code text-primary mb-2">
          CONTRIBUTING.md
        </h2>
        <p className="text-muted-foreground">Confused what to do next? Here's a path to success.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-border/50 hidden md:block" />

        <motion.div 
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'}`}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                       <CardTitle className="text-xl font-bold font-code">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.body}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-auto flex-shrink-0 md:order-1">
                 <div className="bg-primary/10 text-primary rounded-full p-4 border-2 border-primary/50">
                    <step.icon className="w-8 h-8" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
