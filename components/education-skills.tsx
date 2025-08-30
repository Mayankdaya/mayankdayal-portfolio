"use client";

import React from 'react';
import { GraduationCap, Award, Code, Database, Cloud, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSkills = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "VIT Bhopal University",
      duration: "Nov. 2022 – Ongoing",
      gpa: "8.73/10",
      location: "Bhopal, India",
      achievements: []
    },
    {
      degree: "Class XII (Science)",
      institution: "Kendriya Vidyalaya Minambakkam",
      duration: "May 2021",
      gpa: "91.8%",
      location: "Chennai, India",
      achievements: []
    },
    {
      degree: "Class X",
      institution: "Kendriya Vidyalaya Minambakkam",
      duration: "May 2019",
      gpa: "86.2%",
      location: "Chennai, India",
      achievements: []
    }
  ];

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go"],
      icon: Code
    },
    {
      category: "Web Technologies",
      skills: ["Next.js", "React", "Node.js", "Express", "Django", "FastAPI"],
      icon: Code
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"],
      icon: Database
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"],
      icon: Cloud
    },
    {
      category: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "LLMs"],
      icon: Brain
    },
    {
      category: "Other Tools",
      skills: ["Git", "Linux", "WebRTC", "Socket.io", "GraphQL", "REST APIs"],
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20 dark:from-background dark:to-muted/5">
      <div className="container px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 -z-10" />
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4 shadow-sm">
              <span className="mr-2">✦</span>Qualifications<span className="ml-2">✦</span>
            </div>
            <h2 
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-6"
            >
              Education & Skills
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              My academic journey and technical expertise in building scalable, innovative systems
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/80 via-primary/20 to-transparent rounded-full hidden lg:block" />
            
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-xl border border-primary/20 shadow-sm">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Education</span>
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-muted/50 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  
                  <div className="flex justify-between items-start mb-3 relative">
                    <h4 className="font-bold text-xl">{edu.degree}</h4>
                    <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">{edu.duration}</span>
                  </div>
                  
                  <p className="text-primary font-semibold mb-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {edu.institution}
                  </p>
                  
                  <p className="text-sm font-medium text-muted-foreground mb-4 border-b border-muted/30 pb-3">
                    GPA: <span className="text-primary">{edu.gpa}</span>
                  </p>
                  
                  <h5 className="text-sm font-semibold mb-2">Achievements:</h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 group/item">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 group-hover/item:scale-125 transition-transform"></div>
                        <span className="group-hover/item:text-foreground transition-colors">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -right-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/80 via-primary/20 to-transparent rounded-full hidden lg:block" />
            
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 justify-end lg:justify-start">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Technical Skills</span>
              <div className="p-2 bg-primary/10 rounded-xl border border-primary/20 shadow-sm">
                <Award className="h-6 w-6 text-primary" />
              </div>
            </h3>
            
            <div className="space-y-8">
              {technicalSkills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-muted/50 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
                  
                  <div className="flex items-center gap-3 mb-4 relative">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <skillGroup.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg">{skillGroup.category}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-sm transition-all border border-transparent hover:border-primary/30 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;