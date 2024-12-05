"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroComponent() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 pb-8 pt-6 md:py-10 md:pb-12 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          href="#"
        >
          🎉 <span className="sm:hidden">New course!</span>
          <span className="hidden sm:inline">
            Introducing our new Advanced MERN Stack course
          </span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </motion.div>
      <motion.h1
        className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Master the MERN Stack
        <br className="hidden sm:inline" />
        Become a Full-Stack Developer
      </motion.h1>
      <motion.p
        className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Learn MongoDB, Express, React, and Node.js from industry experts. Build
        real-world projects and launch your career in web development.
      </motion.p>
      <motion.div
        className="flex flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          View Curriculum
        </Button>
      </motion.div>
      <motion.div
        className="mt-8 flex items-center justify-center space-x-4 text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {[
          "Comprehensive Curriculum",
          "Hands-on Projects",
          "Expert Instructors",
        ].map((item, index) => (
          <div key={item} className="flex items-center">
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            {item}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
