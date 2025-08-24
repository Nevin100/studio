"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const Roadmap = () => {
  const confusionText = `
    I’ve just entered college… school life is behind me, and now I want to start building something real. 
    Everyone says ‘do development, make projects’ — but where do I even begin? 
    There are thousands of resources, videos, tutorials… and honestly, it feels overwhelming. 
    I want to learn, I want to create, but I’m confused about which direction to take first.
  `;

  return (
    <section id="roadmap" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-code text-primary mb-2">
          CONTRIBUTING.md
        </h2>
        <p className="text-muted-foreground">Feeling a little lost? You're not alone.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <HelpCircle className="w-8 h-8 text-primary" />
                <CardTitle className="text-xl font-bold font-code text-primary">confusion.md</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line text-lg">
                {confusionText.trim()}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;