"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";

const Join = () => {
  const codeText = "echo \"Don’t just browse — contribute to the codebase!\" \n\nsudo join geekroom-webdev 🚀";

  return (
    <section id="join" className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary/20 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>

          <CardContent className="relative p-8 md:p-12">
            <h2 className="font-code text-3xl font-bold text-primary mb-4">join.sh</h2>
            <p className="text-muted-foreground mb-8">Ready to build, learn, and ship? Apply now to join a team of passionate developers and make your mark on the web.</p>
            <pre className="font-code bg-black/30 p-4 rounded-md text-left my-8 text-sm md:text-base whitespace-pre-wrap">
              <code>{codeText}</code>
            </pre>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" asChild>
                  <a href="#">Apply Now</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="ghost" asChild>
                  <a href="#what-we-do">What We Do</a>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Join;
