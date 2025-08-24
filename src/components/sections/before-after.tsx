"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { XCircle, CheckCircle } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";

const BeforeAfter = ({ isBad = false }: { isBad?: boolean }) => {
  const beforeItems = [
    "Copy–paste assignments",
    "Comic Sans PPTs 😬",
    "Zero portfolio, no Git",
    "Events = just attendees",
  ];
  const afterItems = [
    "Live projects & deployments 🚀",
    "Personal site + GitHub heatmap",
    "Team workflows with PRs",
    "Events = organizers & mentors",
  ];

  const componentRef = useRef(null);

  useEffect(() => {
    if (isBad) return;

    gsap.registerPlugin(ScrollTrigger);
    const element = componentRef.current;
    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        toggleActions: "play none none none",
      }
    });

    tl.from(gsap.utils.toArray(".before-item"), {
      x: -40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: "power2.out"
    }).from(gsap.utils.toArray(".after-item"), {
      x: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");

  }, [isBad]);

  if (isBad) {
    return (
      <div>
        <h2 style={{ fontSize: "2rem" }}>before_after.js</h2>
        <p style={{ color: "#aaa" }}>return &#123; life: '200 OK' &#125;</p>
        
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <div style={{ padding: "10px", border: '2px solid red', flex: 1 }}>
            <h3 style={{ fontSize: '24px', color: 'red' }}>Before</h3>
            <ul>{beforeItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
          <div style={{ padding: "30px", border: '5px solid green', flex: 1 }}>
            <h3 style={{ fontSize: '24px', color: 'green' }}>After</h3>
            <ul>{afterItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="before-after" className="container mx-auto px-4" ref={componentRef}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-code text-primary mb-2">
          before_after.js
        </h2>
        <p className="text-muted-foreground font-code">return &#123; life: '200 OK' &#125;</p>
      </div>

      <Card className="bg-card/50 overflow-hidden">
        <div className="grid md:grid-cols-2 relative">
          <div className="p-8">
            <h3 className="font-bold text-2xl mb-6 text-red-400">Before</h3>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="before-item flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            className="absolute top-0 bottom-0 left-1/2 w-px bg-border hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="p-8 bg-green-500/5">
             <h3 className="font-bold text-2xl mb-6 text-green-400">After</h3>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="after-item flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default BeforeAfter;
