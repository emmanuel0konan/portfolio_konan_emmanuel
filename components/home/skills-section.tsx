"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    category: "Frontend"
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    category: "Frontend"
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    category: "Language"
  },
  {
    name: "Nest JS",
    icon: "/images/nestjs.svg",
    category: "Backend"
  },
  {
    name: "Laravel",
    icon: "/images/laravel.svg",
    category: "Backend"
  },
  {
    name: "Mysql",
    icon: "/images/mysql.svg",
    category: "Database"
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    category: "Database"
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    category: "DevOps"
  },
  {
    name: "FastAPI",
    icon: "/images/fastapi.svg",
    category: "Backend"
  },
  {
    name: "Git",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    category: "Tools"
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tailwind-css.svg",
    category: "Frontend"
  },
  {
    name: "Flutter",
    icon: "/images/flutter.svg",
    category: "Mobile"
  }
];

const categories = ["All", "Frontend", "Backend", "Language", "Database", "DevOps", "Cloud", "Tools"];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      y: 20,
      rotate: -5
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: { 
      rotate: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          compétences  <span className="gradient-text">techniques</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Une vitrine des technologies et des outils avec lesquels je travaille pour construire des applications web modernes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover="hover"
              custom={index}
              className="flex flex-col items-center"
            >
              <Card className="w-full h-full p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-0 flex flex-col items-center gap-4">
                  <motion.div 
                    className="relative w-16 h-16"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="font-medium">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.category}</p>
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