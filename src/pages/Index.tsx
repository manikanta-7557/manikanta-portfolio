import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import SocialIcons from "@/components/SocialIcons";
import ThemeToggle from "@/components/ThemeToggle";
import { Server, Palette } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  ExternalLink, 
  Code, 
  Laptop, 
  Mail, 
  User, 
  Briefcase,
  Rocket,
  Settings
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const Index = () => {
  // Updated skill categories
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="w-6 h-6 mb-2" />,
      skills: ["Java", "C++", "SQL", "R"]
    },
    {
      name: "Web Development",
      icon: <Server className="w-6 h-6 mb-2" />,
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Tools",
      icon: <Settings className="w-6 h-6 mb-2" />,
      skills: ["VS Code", "R Studio", "Github"]
    },
    {
      name: "Other Skills",
      icon: <Laptop className="w-6 h-6 mb-2" />,
      skills: ["Data Structures & Algorithms", "Problem Solving", "API Development & Integration"]
    }
  ];

  // Sample projects (you can replace these later)
  const projects = [
    {
      title: "Reminder System",
      description: "The Reminder Project is a simple tool that helps users set reminders with a specific time, date, and a note.",
      image: "/uploads/Reminder.png",
      tech : [],
      // tech: ["React", "Redux", "Express", "PostgreSQL"],
      demoLink: "https://github.com/yourusername/task-management",
      githubLink: "https://github.com/yourusername/task-management"
    },
    {
      title: "TimeaGen - AI-Powered Smart Timetable & Roadmap Generator",
      description: "AI-powered timetable & roadmap builder with smart slotting, streaks, and user personalization.",
      image: "/uploads/TimaGen.png",
      tech : [],
      // tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://github.com/manikanta-7557/TimeaGen",
      githubLink: "https://github.com/manikanta-7557/TimeaGen"
    },
    {
      title: "NyayaPath - AI-Powered Legal Aid Platform",
      description: "AI-powered platform providing legal assistance and resources to users in need.",
      image: "/uploads/NyayaPath.png",
      tech : [],
      // tech: ["Next.js", "TypeScript", "Chart.js", "Firebase"],
      demoLink: "https://nyayapath-legal-aid-platform.netlify.app/",
      githubLink: "https://github.com/manikanta-7557?tab=repositories"
    }
    
  ];

  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  useEffect(() => {
    document.title = "Peddi Manikanta - Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br text-foreground from-background via-secondary to-background">
      {/* Navbar */}
      <Navbar />

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Hero Section */}
      <section id="home" className="section relative overflow-hidden">
        <div className="container mx-auto px-4 pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
          <div className="w-full lg:w-1/2 text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Manikanta Peddi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Software Engineer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-lg">
              I create exceptional digital experiences with clean code and innovative solutions.
              Let's bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
              <a href="/uploads/Manikanta_Peddi_24_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="outline" className="border-white/20 hover:bg-white/10 w-full">
                  View Resume
                </Button>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
              <Avatar className="w-full h-full">
                <AvatarImage src="/uploads/propic.png" alt="Peddi Manikanta" className="object-cover" />
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section bg-black/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-12">
              <User className="w-6 h-6 mr-3 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="col-span-1">
                <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-white/20 shadow-lg bg-black/30 flex items-center justify-center">
                  <Avatar className="w-full h-full">
                    <AvatarImage src="/uploads/propic.png" alt="Peddi Manikanta" className="object-cover" />
                    <AvatarFallback>PM</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Software Engineer and AI Enthusiast
                </h3>
                <p className="text-gray-300 mb-6">
                  I am a Software Engineer with a strong passion for AI, Machine Learning, and Web Development. 
                  My journey in technology started with a curiosity to solve real-world problems through innovative and efficient solutions.
                </p>
                <p className="text-gray-300 mb-6">
                  I specialize in building scalable applications using Java, Python, and modern web technologies. 
                  My approach blends technical expertise with a problem-solving mindset, ensuring both performance and user-centric design.
                </p>
                <p className="text-gray-300">
                  When I'm not coding, I enjoy exploring new technologies, participating in hackathons, 
                  and engaging in open-source contributions. I'm always eager to collaborate on impactful projects 
                  and push the boundaries of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-12">
              <Rocket className="w-6 h-6 mr-3 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-card">
                  <div className="flex flex-col items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        className="bg-white/10 hover:bg-white/20 text-white"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section bg-black/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-12">
              <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="project-card overflow-hidden rounded-xl h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image-reveal w-full h-full object-cover"
                    />
                    <div className="project-links flex space-x-4 justify-center">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                        aria-label="View source code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-white/10 text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-12">
              <Mail className="w-6 h-6 mr-3 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            </div>
            
            <Card className="glass-dark p-8 rounded-2xl">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:manikantapeddi24@gmail.com" className="text-gray-300 hover:text-white">
                    manikantapeddi24@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+91 9182727557</span>
                </div>
              </div>
              
              <form
                action="https://formspree.io/f/xzzgernz"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name" 
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email" 
                      type="email"
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message" 
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-32"
                    placeholder="Your message..."
                    rows={5}
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} Peddi Manikanta. All rights reserved.</p>
          </div>
          
          <SocialIcons />
        </div>
      </footer>
      
      {/* Fixed Theme Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <ThemeToggle />
      </div>

      {/* Neon blurred floating shapes background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-10 top-32 w-56 h-56 rounded-full bg-blue-500/40 blur-3xl animate-float-slow shadow-[0_0_80px_40px_rgba(59,130,246,0.2)]" style={{ filter: 'blur(60px)' }} />
        <div className="absolute right-24 top-1/2 w-40 h-40 rounded-full bg-pink-500/40 blur-3xl animate-float-medium shadow-[0_0_80px_40px_rgba(236,72,153,0.1)]" style={{ filter: 'blur(50px)' }} />
        <div className="absolute left-1/2 bottom-10 w-72 h-72 rounded-full bg-cyan-400/30 blur-3xl animate-float-fast shadow-[0_0_100px_60px_rgba(6,182,212,0.1)]" style={{ filter: 'blur(80px)' }} />
        <div className="absolute right-1/4 bottom-12 w-48 h-48 rounded-full bg-purple-500/40 blur-3xl animate-float-slow shadow-[0_0_80px_40px_rgba(168,85,247,0.5)]" style={{ filter: 'blur(60px)' }} />
      </div>
    </div>
  );
};

export default Index;
