import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient opacity-20" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-emerald-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-orange-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-sm text-violet-300">Disponible para proyectos</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up stagger-1">
          <span className="text-white">Hola, soy </span>
          <span className="gradient-text">Marvin</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 animate-fade-in-up stagger-2">
          Desarrollador Web
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground/80 mb-10 animate-fade-in-up stagger-3">
          Un apasionado desarrollador de Python que crea soluciones web modernas y eficientes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up stagger-4">
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg rounded-xl glow"
            onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Proyectos
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-violet-500/30 hover:bg-violet-500/10 text-white px-8 py-6 text-lg rounded-xl"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contactar
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 animate-fade-in-up stagger-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary/50 hover:bg-violet-500/20 border border-border hover:border-violet-500/50 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary/50 hover:bg-violet-500/20 border border-border hover:border-violet-500/50 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:tu@email.com"
            className="p-3 rounded-xl bg-secondary/50 hover:bg-violet-500/20 border border-border hover:border-violet-500/50 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
