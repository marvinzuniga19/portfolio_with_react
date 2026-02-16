import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Box,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Desarrollo de interfaces modernas y responsivas",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    description: "Arquitectura de servidores y APIs robustas",
    skills: [
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
      { name: "Flask", level: 78 },
      { name: "Node.js", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "MariaDB", level: 82 },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Despliegue y gestión de infraestructura",
    skills: [
      { name: "Docker", level: 85 },
    ],
  },
  {
    title: "Móvil",
    icon: Smartphone,
    description: "Desarrollo de aplicaciones móviles",
    skills: [
      { name: "Dart", level: 85 },
      { name: "Flutter", level: 90 },
    ],
  },
];

const technologies = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Terminal },
  { name: "React", icon: Code2 },
  { name: "Python", icon: Terminal },
  { name: "Django", icon: Terminal },
  { name: "Flask", icon: Terminal },
  { name: "Node.js", icon: Cpu },
  { name: "PostgreSQL", icon: Database },
  { name: "MariaDB", icon: Database },
  { name: "Docker", icon: Box },
  { name: "Dart", icon: Terminal },
  { name: "Flutter", icon: Smartphone },
  { name: "Git", icon: GitBranch },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyan-500/30 text-cyan-400">
            Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear soluciones digitales de alta calidad.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/30">
                    <category.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies cloud */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Tecnologías que uso</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 cursor-default opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.05}s`, animationFillMode: 'forwards' }}
              >
                <tech.icon className="w-4 h-4 text-violet-400" />
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
