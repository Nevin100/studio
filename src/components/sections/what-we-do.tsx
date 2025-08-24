"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const WhatWeDo = ({ isBad = false }: { isBad?: boolean }) => {
  const achievements = [
    "Developed official Hackathon websites",
    "Hosted Intra-Society Hackathons",
    "Built innovative web projects",
    "Shipped inter-department solutions",
  ];

  const departments = [
    "Engineering → project portals & dashboards",
    "Business → e-commerce & analytics",
    "Design → portfolio & showcases",
    "Science → research sites & data viz",
    "Fests → event sites & ticketing",
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
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.from(gsap.utils.toArray(".log-item"), {
      x: -30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    }).from(gsap.utils.toArray(".echo-line"), {
      x: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3");

  }, [isBad]);
  
  if (isBad) {
    return (
      <div>
        <h2 style={{ fontSize: "33px", textAlign: "center", color: 'red' }}>
          ./what_we_do.sh
        </h2>
        <p style={{ textAlign: "right", fontStyle: "italic", color: "gray", fontSize: '10px' }}>From hackathon sites to department portals, we build it all.</p>
        <div style={{ display: 'flex', marginTop: '2rem', gap: '1rem' }}>
          <div style={{ flex: 1, border: '3px solid green', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'yellow' }}>achievements.log</h3>
            <ul>{achievements.map((item, i) => <li key={i} style={{ marginLeft: `${i * 10}px` }}>{item}</li>)}</ul>
          </div>
          <div style={{ flex: 1, border: '1px dotted magenta', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'cyan' }}>cross_department.sh</h3>
            <div>{departments.map((item, i) => <p key={i} style={{ paddingLeft: `${i * 5}px` }}>{item}</p>)}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="what-we-do" className="container mx-auto px-4" ref={componentRef}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-code text-primary mb-2">
          ./what_we_do.sh
        </h2>
        <p className="text-muted-foreground">From hackathon sites to department portals, we build it all.</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Card className="bg-card/50 border-border/50 backdrop-blur-sm overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Achievements Column */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-border/50">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-code text-2xl text-accent flex items-center gap-3">
                  <span className="text-green-400">$</span>
                  achievements.log
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-4">
                  {achievements.map((item, index) => (
                    <li key={index} className="log-item flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>

            {/* Cross Department Column */}
            <div className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-code text-2xl text-secondary flex items-center gap-3">
                  <Terminal />
                  cross_department.sh
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3 font-code text-lg">
                  {departments.map((line, index) => {
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
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhatWeDo;
