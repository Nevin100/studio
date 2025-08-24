"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Terminal } from "lucide-react";

const WhyJoin = ({ isBad = false }: { isBad?: boolean }) => {
  const markdown =
    "• Build **real apps** used on campus\n• Be the **tech hero** every dept calls\n• Learn **future-proof** tools\n• Late-night builds + memes\n• **Showcase** portfolio & get noticed";

  const parseMarkdown = (text: string) => {
    return text.split("\n").map((line, i) => (
      <motion.p
        key={i}
        variants={lineVariants}
        className="md-line flex items-start gap-3"
      >
        <span className="text-primary mt-1.5">•</span>
        <span
          dangerouslySetInnerHTML={{
            __html: line
              .substring(2)
              .replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="text-primary font-semibold">$1</strong>'
              ),
          }}
        />
      </motion.p>
    ));
  };

  if (isBad) {
    return (
      <div style={{ border: "4px ridge purple", padding: "1rem 3rem" }}>
        <h2 style={{ fontSize: "2.5rem", color: "pink" }}>why_join_us.md</h2>
        <div
          style={{
            marginTop: "1rem",
            whiteSpace: "pre-line",
            fontSize: "18px",
            color: "lightgreen",
          }}
        >
          {markdown}
        </div>
      </div>
    );
  }

  // Container stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  // Each line anim
  const lineVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section id="why-join" className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card/30 border-border/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-code text-2xl text-accent flex items-center gap-2">
              <Terminal />
              why_join_us.md
            </CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-3 text-lg text-foreground"
            >
              {parseMarkdown(markdown)}
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyJoin;
