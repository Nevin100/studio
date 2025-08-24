"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, GitMerge } from "lucide-react";

const Roadmap = ({ isBad = false }: { isBad?: boolean }) => {
  const confusionText = `
    I’ve just entered college… school life is behind me, and now I want to start building something real. 
    Everyone says ‘do development, make projects’ — but where do I even begin? 
    There are thousands of resources, videos, tutorials… and honestly, it feels overwhelming. 
    I want to learn, I want to create, but I’m confused about which direction to take first.
  `;

  const solutionText = `
• **Foundation First:** We start with Git, HTML, CSS & JS. No shortcuts.
• **Frameworks:** Dive into React & Next.js with guided mini-projects.
• **Backend & DBs:** Learn how to build full-stack apps with Node.js, Express, and databases.
• **Mentorship:** Get paired with senior members for code reviews and guidance.
• **Real-World Experience:** Contribute to live campus projects to build your portfolio.
  `;
  
  if (isBad) {
    return (
      <div>
        <h2 style={{ fontSize: "3rem", color: 'orange', textAlign: 'center' }}>CONTRIBUTING.md</h2>
        <p style={{ textAlign: 'center' }}>Feeling a little lost? Here's the way forward.</p>
        <div style={{ marginTop: '2rem' }}>
          <div style={{ border: '2px dotted blue', padding: '1rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'red' }}>confusion.md</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{confusionText.trim()}</p>
          </div>
          <div style={{ border: '2px solid yellow', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'green' }}>solution.md</h3>
            <div style={{ whiteSpace: 'pre-line' }}>{solutionText.trim()}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="roadmap" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-code text-primary mb-2">
          CONTRIBUTING.md
        </h2>
        <p className="text-muted-foreground">Feeling a little lost? Here's the way forward.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <GitMerge className="w-8 h-8 text-accent" />
                <CardTitle className="text-xl font-bold font-code text-accent">solution.md</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-lg text-foreground">
                {solutionText.trim().split('\n').map((line, i) => (
                  <p key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1.5">•</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line
                          .substring(2)
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>'),
                      }}
                    />
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
