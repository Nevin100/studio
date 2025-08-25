"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";

const BeforeAfter = ({ isBad = false }: { isBad?: boolean }) => {
  const beforeItems = [
    "Assignments copied just to meet deadlines 📑",
    "PPTs with Comic Sans and clipart 😬",
    "No GitHub, no portfolio, no proof of skills",
    "Joining events only as spectators 👀",
  ];

  const afterItems = [
    "Building real-world projects & deploying them 🚀",
    "Personal websites + GitHub heatmaps full of green",
    "Collaborating with teams through PRs & workflows 🤝",
    "Running events as organizers, mentors & leaders",
  ];

  // Variants for parent list (controls staggering)
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Variants for before/after items
  const beforeItemVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const afterItemVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (isBad) {
    return (
      <div>
        <h2 style={{ fontSize: "2rem" }}>before_after.js</h2>
        <p style={{ color: "#aaa" }}>return &#123; life: '200 OK' &#125;</p>

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
          <div style={{ padding: "10px", border: "2px solid red", flex: 1 }}>
            <h3 style={{ fontSize: "24px", color: "red" }}>Before</h3>
            <ul>{beforeItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
          <div style={{ padding: "30px", border: "5px solid green", flex: 1 }}>
            <h3 style={{ fontSize: "24px", color: "green" }}>After</h3>
            <ul>{afterItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="before-after" className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-code text-primary mb-2">
          before_after.js
        </h2>
        <p className="font-code text-foreground mb-6">
          return &#123; life: '200 OK' &#125;
        </p>

        {/* Image directly below return line */}
        
      </div>

      <Card className="bg-card/50 overflow-hidden">
        <div className="grid md:grid-cols-2 relative">
          {/* Before */}
          <div className="p-8">
            <h3 className="font-bold text-2xl mb-6 text-red-400">Before</h3>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-4"
            >
              {beforeItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={beforeItemVariants}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Divider */}
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 w-px bg-border hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* After */}
          <div className="p-8 bg-green-500/5">
            <h3 className="font-bold text-2xl mb-6 text-green-400">After</h3>
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-4"
            >
              {afterItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={afterItemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </Card>
      <div className="flex justify-center  mb-10 mt-10">
          <img
            src="/meme2.jpg"
            alt="Before and After Transformation"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover h-[460px]"
          />
        </div>
    </section>
  );
};

export default BeforeAfter;
