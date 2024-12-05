"use client";

import { motion } from "framer-motion";
import HeaderComponent from "@/components/header";
import HeroComponent from "@/components/Hero";
import FeaturesComponent from "@/components/Features";
import CurriculumComponent from "@/components/Curriculum";
import TestimonialsComponent from "@/components/Testimonials";
import ContactComponent from "@/components/Contact";
import FooterComponent from "@/components/Footer";

export function MernTeachingPlatform() {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderComponent />
      <main>
        <HeroComponent />
        <FeaturesComponent />
        <CurriculumComponent />
        <TestimonialsComponent />
        <ContactComponent />
      </main>
      <FooterComponent />
    </motion.div>
  );
}
