"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Achievements = () => {
  const items = [
    "✔ Developed official Hackathon websites",
    "✔ Hosted Intra-Society Hackathons",
    "✔ Built innovative web projects",
    "✔ Inter-department solutions shipped",
  ];

  const listRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const listElement = listRef.current;
    if (!listElement) return;

    const logItems = gsap.utils.toArray(".log-item");
    const checkIcons = gsap.utils.toArray(".check-icon");

    gsap.from(logItems, {
      scrollTrigger: {
        trigger: listElement,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
    });

    gsap.to(checkIcons, {
        scrollTrigger: {
            trigger: listElement,
            start: "top 60%",
            toggleActions: "play none none none",
        },
        scale: 1.2,
        yoyo: true,
        repeat: 1,
        stagger: 0.2,
        duration: 0.2,
        ease: "power1.inOut"
    });

  }, []);

  return (
    <section id="achievements" className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-card/30 border-border/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-code text-2xl text-accent flex items-center gap-2">
              <span className="text-green-400">$</span>
              achievements.log
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul ref={listRef} className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="log-item flex items-start gap-3">
                  <CheckCircle2 className="check-icon w-5 h-5 text-green-400 mt-1 shrink-0" />
                  <span className="text-lg text-muted-foreground">{item.substring(2)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;
