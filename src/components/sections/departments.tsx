"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Departments = () => {
  const lines = [
    "Engineering → project portals & dashboards",
    "Business → e-commerce & analytics",
    "Design → portfolio & showcases",
    "Science → research sites & data viz",
    "Fests → event sites & ticketing",
  ];

  const listRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const listElement = listRef.current;
    if (!listElement) return;

    gsap.from(gsap.utils.toArray(".echo-line"), {
      scrollTrigger: {
        trigger: listElement,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      x: -20,
      opacity: 0,
      stagger: 0.12,
      duration: 0.45,
      ease: "power2.out",
    });
  }, []);

  return (
    <section id="departments" className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/30 border-border/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-code text-2xl text-secondary">
              ./cross_department.sh
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div ref={listRef} className="space-y-3 font-code text-lg">
              {lines.map((line, index) => {
                const parts = line.split(" → ");
                return (
                  <p key={index} className="echo-line">
                    <span className="text-secondary">{parts[0]}</span>
                    <span className="text-muted-foreground"> → </span>
                    <span className="text-foreground">{parts[1]}</span>
                  </p>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Departments;
