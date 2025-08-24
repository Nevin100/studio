"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Terminal } from "lucide-react";

const MarkdownPanel = () => {
  const markdown =
    "• Build **real apps** used on campus\n• Be the **tech hero** every dept calls\n• Learn **future-proof** tools\n• Late-night builds + memes\n• **Showcase** portfolio & get noticed";

  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const contentElement = contentRef.current;
    if (!contentElement) return;

    gsap.from(gsap.utils.toArray(".md-line"), {
      scrollTrigger: {
        trigger: contentElement,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 12,
      stagger: 0.07,
      duration: 0.35,
    });
  }, []);

  const parseMarkdown = (text: string) => {
    return text.split('\n').map((line, i) => (
      <p key={i} className="md-line flex items-start gap-3">
        <span className="text-primary mt-1.5">•</span>
        <span
          dangerouslySetInnerHTML={{
            __html: line
              .substring(2)
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>'),
          }}
        />
      </p>
    ));
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
          <CardContent ref={contentRef} className="space-y-3 text-lg text-muted-foreground">
            {parseMarkdown(markdown)}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MarkdownPanel;
