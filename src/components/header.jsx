"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export default function HeaderComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MERN Master</span>
          </Link>
        </motion.div>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {["Features", "Curriculum", "Testimonials", "Contact"].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              </motion.div>
            ),
          )}
        </nav>
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button variant="ghost">Log in</Button>
          <Button>Sign up</Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
