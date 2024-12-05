"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  Server,
  Code,
  Laptop,
  Zap,
  Users,
  Book,
  Trophy,
} from "lucide-react";

const features = [
  {
    title: "MongoDB Mastery",
    description:
      "Dive deep into NoSQL databases and learn to model data efficiently.",
    icon: Database,
    color: "bg-green-500",
  },
  {
    title: "Express.js Expertise",
    description: "Build robust and scalable backend APIs with ease.",
    icon: Server,
    color: "bg-blue-500",
  },
  {
    title: "React Wizardry",
    description: "Create dynamic and responsive user interfaces like a pro.",
    icon: Code,
    color: "bg-cyan-500",
  },
  {
    title: "Node.js Ninjas",
    description: "Harness the power of JavaScript on the server-side.",
    icon: Laptop,
    color: "bg-yellow-500",
  },
  {
    title: "Real-time Applications",
    description:
      "Learn to build real-time features using WebSockets and Socket.io.",
    icon: Zap,
    color: "bg-purple-500",
  },
  {
    title: "Collaborative Learning",
    description: "Engage in pair programming and team projects.",
    icon: Users,
    color: "bg-pink-500",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Cover everything from basics to advanced topics in web development.",
    icon: Book,
    color: "bg-indigo-500",
  },
  {
    title: "Industry-Ready Skills",
    description:
      "Gain the expertise needed to excel in modern web development roles.",
    icon: Trophy,
    color: "bg-orange-500",
  },
];

export default function FeaturesComponent() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="features" className="container py-12 md:py-24 lg:py-32">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl">
          Why Choose Our MERN Stack Course?
        </h2>
        <p className="mx-auto max-w-[800px] text-gray-500 dark:text-gray-400">
          Discover the unique features that make our course stand out in the
          world of web development education.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="group relative cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 ${feature.color} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
              />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <feature.icon
                    className={`h-8 w-8 ${feature.color} rounded-full p-1 text-white`}
                  />
                  <Badge
                    variant="outline"
                    className="transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    MERN Stack
                  </Badge>
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-foreground"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
