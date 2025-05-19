"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Project data
const projects = [
  {
    id: 1,
    title: "Dashboard",
    description: "Une application web fait en react JS qui regroupe plusieurs microservices independant",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    tags: ["React", "Nest JS", "MongoDB"],
    liveUrl: "https://front-end-react-tau.vercel.app/",
    repoUrl: "#",
    category: "fullstack",
  },
  {
    id: 2,
    title: "My Rotten tomatoes",
    description: "Un site web qui permet aux utilisateurs de noter leurs films voir les films du moment parmi un large catalogue de films foruni grace a l api de tmdb .",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://rotten-tomatoes-drab.vercel.app/",
    repoUrl: "#",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A real-time messaging platform with private and group chats, file sharing, and notification system.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    tags: ["React", "Socket.io", "Express", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
    category: "fullstack",
  },
  {
    id: 4,
    title: "RESTful API Service",
    description: "A robust API service for content management with authentication, rate limiting, and comprehensive documentation.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    tags: ["Node.js", "Express", "MongoDB", "Swagger"],
    liveUrl: "#",
    repoUrl: "#",
    category: "backend",
  },
  {
    id: 5,
    title: "Personal Finance Dashboard",
    description: "An interactive dashboard for tracking personal finances with data visualization and budgeting tools.",
    image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg",
    tags: ["React", "Chart.js", "Firebase", "Material UI"],
    liveUrl: "#",
    repoUrl: "#",
    category: "frontend",
  },
  {
    id: 6,
    title: "Fitness Tracking Application",
    description: "A mobile-first application for tracking workouts, nutrition, and fitness progress with social features.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    tags: ["React Native", "Redux", "Node.js", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    category: "mobile",
  },
];

// Filter categories
const categories = [
  { value: "all", label: "Tous" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "mobile", label: "Mobile" },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projets <span className="gradient-text">Realisés</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Une vitrine de mes travaux récents, y compris des applications web, des APIs et des projets mobiles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              onClick={() => setActiveCategory(category.value)}
              className={activeCategory === category.value ? "bg-indigo-600" : ""}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card-hover"
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-secondary text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}