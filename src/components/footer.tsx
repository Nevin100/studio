"use client";

import { motion } from "framer-motion";
import { Github, Send } from "lucide-react";

const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 20a1 1 0 0 1-1-1 8 8 0 0 1-7-8 1 1 0 0 1 1-1h2a1 1 0 0 1 1 1 5 5 0 0 0 9.6 2.4A1 1 0 0 1 15 8h2a1 1 0 0 1 1 1 8 8 0 0 1-8 11z"></path>
        <path d="M8 12a1 1 0 0 1-1-1 4 4 0 0 1 7-2.9A1 1 0 0 1 15 8h2a1 1 0 0 1 1 1 8 8 0 0 1-8 11c-1.6 0-3-1-4-2"></path>
    </svg>
);


const Footer = () => {
  const footerLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "Discord", href: "#", icon: DribbbleIcon },
    { name: "Email", href: "#", icon: Send },
  ];

  return (
    <footer id="footer" className="border-t border-white/10 py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-muted-foreground">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm mb-4 sm:mb-0"
        >
          © 2024 GeekRoom WebDev. All Rights Reserved.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex items-center space-x-6"
        >
          {footerLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;