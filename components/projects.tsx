"use client"

"use client";

import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  accentColor?: string
}

function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
  accentColor = "rgba(36, 101, 237, 0.5)",
}: ProjectCardProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Adjust accent color opacity for dark mode
  const adjustedAccentColor = isDark
    ? accentColor.replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/, "rgba($1, $2, $3, 0.3)")
    : accentColor

  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full overflow-hidden bg-background/60 backdrop-blur-sm border-2 border-opacity-30 transition-all duration-300 hover:shadow-xl dark:bg-background/80 hover:border-primary/50">
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20 shadow-sm">
            <span className="text-xs font-medium text-primary">Featured Project</span>
          </div>
        </div>
        <div className="p-8 flex flex-col relative z-10">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary border border-primary/10 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 mt-auto">
            {githubUrl && (
              <Button variant="outline" size="sm" asChild className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" asChild className="rounded-full shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-primary/80">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 z-0 opacity-20 dark:opacity-30"
          initial={{ opacity: 0 }}
          animate={{
            background: [
              `radial-gradient(circle at 30% 30%, ${adjustedAccentColor} 0%, transparent 70%)`,
              `radial-gradient(circle at 70% 70%, ${adjustedAccentColor} 0%, transparent 70%)`,
            ],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle border glow effect */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `0 0 40px 5px ${adjustedAccentColor}`,
          }}
        />
      </Card>
    </motion.div>
  )
}

export default function Projects() {
  const projects = [
    {
      title: "CodeClash – Real-Time Competitive Coding Platform",
      description: "Engineered a full-stack platform enabling real-time coding battles with live video and collaborative editing. Designed a scalable matchmaking system handling concurrent peer-to-peer sessions and integrated AI-generated problems with sandboxed real-time code execution.",
      technologies: ["Next.js", "TypeScript", "Firebase", "WebRTC", "Google Gemini API", "Web Workers"],
      imageUrl: "/placeholder.svg",
      liveUrl: "https://code-clash-ten.vercel.app/",
      githubUrl: "https://github.com/Mayankdaya/CodeClash",
      accentColor: "rgba(139, 92, 246, 0.5)",
    },
    {
      title: "Drug and Molecule Research Platform",
      description: "Developed an AI-assisted drug discovery tool with molecular visualization capabilities. Automated SMILES-to-molecule generation pipeline, reducing researcher processing time by 40% and enabling faster drug candidate identification.",
      technologies: ["Next.js", "React.js", "TypeScript", "RDKit", "AI", "Molecular Visualization"],
      imageUrl: "/placeholder.svg",
      liveUrl: "https://molecule-research.vercel.app",
      githubUrl: "https://github.com/mayankdayal/molecule-research",
      accentColor: "rgba(236, 72, 153, 0.5)",
    },
    {
      title: "Plant Disease Detection System",
      description: "Implemented a CNN-based model achieving 92% accuracy in classifying 15+ plant diseases. Deployed using Flask with cloud integration, enabling 500+ daily diagnoses by end users and helping farmers identify plant health issues early.",
      technologies: ["Python", "TensorFlow", "CNN", "Flask", "Cloud Integration", "Computer Vision"],
      imageUrl: "/placeholder.svg",
      liveUrl: "https://plant-disease-detection.herokuapp.com",
      githubUrl: "https://github.com/mayankdayal/plant-disease-detection",
      accentColor: "rgba(34, 211, 238, 0.5)",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-muted/5 dark:from-muted/10 dark:to-background" id="projects" aria-labelledby="projects-heading">
      <div className="container px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-30 -z-10" />
        
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16 relative">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-2 shadow-sm">
              <span className="mr-2">✦</span>Featured Work<span className="ml-2">✦</span>
            </div>
            <h2 
              id="projects-heading" 
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
            >
              Showcase Projects
            </h2>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl leading-relaxed">
              A collection of innovative solutions demonstrating expertise in full-stack development, AI integration, and real-time collaborative systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              accentColor={project.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}