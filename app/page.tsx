import { Button } from "@/components/ui/button"
import { Bot, Database, Shield, Users, Zap, Mail, Linkedin, Github, Download } from "lucide-react"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FramerSpotlight from "@/components/framer-spotlight"
import CssGridBackground from "@/components/css-grid-background"
import Projects from "@/components/projects"
import EducationSkills from "@/components/education-skills"
import StructuredData from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="flex min-h-screen flex-col">
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <CssGridBackground />
          <FramerSpotlight />
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
          
          <div className="container px-4 md:px-6 py-16 md:py-24 relative z-10">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <div 
                className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-8 shadow-sm"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <span className="mr-2">✦</span>Full-Stack Developer & AI Engineer<span className="ml-2">✦</span>
              </div>
              
              <Image src="/1752521103193.jpeg" alt="Mayank Dayal" width={160} height={160} className="rounded-full mb-6 border-4 border-primary/50 shadow-lg" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Mayank Dayal
              </h1>
              
              <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-2xl/relaxed max-w-3xl mb-12 leading-relaxed">
                B.Tech Computer Science student specializing in distributed systems, AI integration, and full-stack development. 
                Experienced in building scalable web applications and AI-powered solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm hover:bg-primary/20 transition-colors duration-300">Next.js</span>
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm hover:bg-primary/20 transition-colors duration-300">TypeScript</span>
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm hover:bg-primary/20 transition-colors duration-300">Python</span>
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm hover:bg-primary/20 transition-colors duration-300">AWS</span>
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm hover:bg-primary/20 transition-colors duration-300">WebRTC</span>
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm hover:bg-primary/20 transition-colors duration-300">TensorFlow</span>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <Button asChild className="flex items-center gap-3 px-6 py-7 h-[64px] bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <a href="#contact">
                    <Zap className="h-5 w-5 text-white mr-2" />
                    <span className="text-base font-medium">Get In Touch</span>
                  </a>
                </Button>
                <Button asChild className="px-6 py-7 h-[64px] rounded-full border-2 border-primary/30 bg-transparent hover:bg-primary/10 text-base font-medium text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button asChild className="px-6 py-7 h-[64px] rounded-full border-2 border-primary/30 bg-transparent hover:bg-primary/10 text-base font-medium text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50">
                  <a href="https://drive.google.com/file/d/10fSF61hwMx3qEVa0pX0iDf2C9TU7HhWV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Download className="h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
              
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center">
                  <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Education & Skills */}
        <EducationSkills />



        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20 dark:from-background dark:to-muted/5" aria-labelledby="contact-heading">
          <div className="container px-4 md:px-6 relative">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-30 -z-10" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 -z-10" />
            
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-2 shadow-sm">
                <span className="mr-2">✦</span>Get In Touch<span className="ml-2">✦</span>
              </div>
              <div className="space-y-4">
                <h2 
                  id="contact-heading" 
                  className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
                >
                  Let's Connect
                </h2>
                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl leading-relaxed">
                  I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
                </p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto bg-background/80 dark:bg-muted/10 backdrop-blur-lg rounded-3xl p-8 border border-muted shadow-lg">
              <ContactForm />
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-base text-muted-foreground mb-6 font-medium">Or reach out directly via:</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 px-6 py-6 h-auto" 
                  asChild
                >
                  <a href="mailto:mayankdayal@example.com" className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">mayankdayal@example.com</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 px-6 py-6 h-auto" 
                  asChild
                >
                  <a href="https://linkedin.com/in/mayankdayal" className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">LinkedIn Profile</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 px-6 py-6 h-auto" 
                  asChild
                >
                  <a href="https://github.com/mayankdayal" className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">GitHub Profile</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
