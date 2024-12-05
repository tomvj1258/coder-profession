"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const technologies = [
  {
    name: "MongoDB",
    description: "Learn to work with NoSQL databases",
    projects: [
      {
        name: "User Management System",
        skills: ["CRUD operations", "Data modeling", "Indexing"],
        duration: "2 weeks",
      },
      {
        name: "E-commerce Product Catalog",
        skills: ["Complex queries", "Aggregation", "Full-text search"],
        duration: "3 weeks",
      },
    ],
  },
  {
    name: "Express.js",
    description: "Build robust backend APIs",
    projects: [
      {
        name: "RESTful API for a Blog",
        skills: ["Routing", "Middleware", "Error handling"],
        duration: "2 weeks",
      },
      {
        name: "Authentication System",
        skills: ["JWT", "Password hashing", "Role-based access control"],
        duration: "3 weeks",
      },
    ],
  },
  {
    name: "React",
    description: "Create dynamic user interfaces",
    projects: [
      {
        name: "Task Management App",
        skills: ["Components", "State management", "Hooks"],
        duration: "3 weeks",
      },
      {
        name: "Real-time Chat Application",
        skills: ["Context API", "WebSockets", "Custom hooks"],
        duration: "4 weeks",
      },
    ],
  },
  {
    name: "Node.js",
    description: "Develop scalable server-side applications",
    projects: [
      {
        name: "File Upload Service",
        skills: ["Streams", "File system operations", "Multipart form data"],
        duration: "2 weeks",
      },
      {
        name: "Job Queue System",
        skills: ["Worker threads", "Redis integration", "Scheduled tasks"],
        duration: "3 weeks",
      },
    ],
  },
];

export default function CurriculumComponent() {
  return (
    <section id="curriculum" className="container py-12 md:py-24 lg:py-32">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project-Based Curriculum
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {technologies.map((tech, techIndex) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: techIndex * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{tech.name}</CardTitle>
                <CardDescription>{tech.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={tech.projects[0].name} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    {tech.projects.map((project) => (
                      <TabsTrigger key={project.name} value={project.name}>
                        {project.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {tech.projects.map((project, projectIndex) => (
                    <TabsContent key={project.name} value={project.name}>
                      <motion.div
                        className="mt-4 space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: projectIndex * 0.1,
                        }}
                      >
                        <h4 className="font-semibold">
                          Project: {project.name}
                        </h4>
                        <p>Duration: {project.duration}</p>
                        <div>
                          <h5 className="mb-2 font-semibold">
                            Skills you&apos;ll learn:
                          </h5>
                          <ul className="space-y-2">
                            {project.skills.map((skill) => (
                              <motion.li
                                key={skill}
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                                {skill}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <Badge variant="secondary">
                          Project-based learning
                        </Badge>
                      </motion.div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
