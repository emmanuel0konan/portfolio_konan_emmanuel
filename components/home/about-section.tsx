"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, Heart } from "lucide-react";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A propos de <span className="gradient-text">Moi</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Apprenez à me connaître, mon parcours et ce qui me motive en tant
            que développeur..
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden aspect-square max-w-md mx-auto lg:mx-0"
          >
            <Image
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Profile Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Developpeur Full-Stack Junior / Mobile / IA
            </h3>
            <p className="text-muted-foreground mb-6">
              Je conçois des expériences numériques simples, rapides, belles et
              accessibles à tous, quel que soit l'appareil utilisé. En tant que
              développeur full-stack et mobile, je construis des applications
              complètes, du côté serveur jusqu’à l’interface utilisateur, avec
              un souci du détail et de la performance.
            </p>
            <p className="text-muted-foreground mb-8">
              Je suis aussi AI Workflow Designer : j’automatise des tâches
              complexes grâce à l’intelligence artificielle pour faire gagner du
              temps et améliorer l’efficacité. Mon objectif est d’utiliser la
              technologie pour créer des solutions utiles, intuitives et
              modernes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                variants={cardVariants}
                custom={0}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Card className="card-hover h-full border-l-4 border-l-indigo-600">
                  <CardContent className="p-4 flex items-start">
                    <Briefcase className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        6 mois d´experience dans le  development web
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={cardVariants}
                custom={1}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Card className="card-hover h-full border-l-4 border-l-indigo-600">
                  <CardContent className="p-4 flex items-start">
                    <GraduationCap className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Formation</h4>
                      <p className="text-sm text-muted-foreground">
                        Informatique 
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={cardVariants}
                custom={2}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Card className="card-hover h-full border-l-4 border-l-indigo-600">
                  <CardContent className="p-4 flex items-start">
                    <Award className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Certifications</h4>
                      <p className="text-sm text-muted-foreground">
                        POSTMAN, Google Cloud
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={cardVariants}
                custom={3}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Card className="card-hover h-full border-l-4 border-l-indigo-600">
                  <CardContent className="p-4 flex items-start">
                    <Heart className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Intérêts</h4>
                      <p className="text-sm text-muted-foreground">
                        Web,Mobile/Automatisation
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
