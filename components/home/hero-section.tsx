"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Typewriter from "typewriter-effect";
import { AnimatedBackground } from "../ui/animated-background";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-lg md:text-xl mb-2 text-muted-foreground">
              👋 Salut, Je  suis
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Emmanuel Konan</span>
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-foreground h-12">
              <Typewriter
                options={{
                  strings: [
                    "Developpeur Full Stack",
                    "Mobile",
                    "Codeur Creatif",
                    "AI Workflow Designer"
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriter-text",
                }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
           Je crée des expériences en ligne simples, rapides, belles et faciles à utiliser pour tout le monde, sur tous les types d’appareils..
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[150px]"
              asChild
            >
              <a href="#projects">Mes Projets </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="min-w-[150px]"
              asChild
            >
              <a href="#contact">Contactez Moi</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" className="flex items-center justify-center">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}