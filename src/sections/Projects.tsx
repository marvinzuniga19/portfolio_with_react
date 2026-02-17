import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Python Web Scraper",
    description: "Herramienta de extracción de datos web creada con Python, Beautiful Soup y Requests para extraer datos de sitios web..",
    image: "/images/proyectos/scraper.png",
    tags: ["Python", "BeautifulSoup", "Requests", "Scraping"],
    repoUrl: "https://github.com/marvinzuniga19/flask_webJob_scraper",
  },
  {
    id: 2,
    title: "Sistema Inventario Web",
    description: "Una aplicación web moderna y responsiva para la gestión de inventario de pequeños negocios, desarrollada con Python Flask y Bootstrap 5",
    image: "/images/proyectos/sistema_Inventario.png",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    repoUrl: "https://github.com/marvinzuniga19/inventario_python",
  },
  {
    id: 3,
    title: "Punto de Venta (POS) Python",
    description: "Un sistema completo de punto de venta desarrollado en Python con CustomTkinter, SQLite y soporte completo de códigos de barras, mediante cámara y entrada manual.",
    image: "/images/proyectos/punto_venta.png",
    tags: ["Python", "CustomTkinter", "SQLite", "Barcode"],
    repoUrl: "https://github.com/marvinzuniga19/pos_python",
  },
  {
    id: 4,
    title: "Generador de Facturas Flutter",
    description: "Una aplicación profesional de Flutter para crear, gestionar y compartir facturas con capacidad de exportación a PDF.",
    image: "/images/proyectos/invoice.png",
    tags: ["Flutter", "Dart", "PDF Export", "Mobile App"],
    repoUrl: "https://github.com/marvinzuniga19/invoice_app_flutter",
  },
  {
    id: 5,
    title: "Punto de venta (POS) Flutter",
    description: "Un Sistema de Punto de Venta (POS) moderno y multiplataforma diseñado específicamente para el mercado nicaragüense, con cumplimiento fiscal hecho con Flutter.",
    image: "/images/proyectos/punto_venta_flutter.png",
    tags: ["Flutter", "Dart", "Firebase", "Fiscal Compliance"],
    repoUrl: "https://github.com/marvinzuniga19/flutter_pos",
  },
  {
    id: 6,
    title: "Descargador de YouTube Flet",
    description: "Una aplicación sencilla y fácil de usar, desarrollada en Python con el framework Flet , que permite descargar música desde YouTube en formato MP3 u otros formatos compatibles.",
    image: "/images/proyectos/ytd.png",
    tags: ["Python", "Flet", "YouTube Downloader", "GUI"],
    repoUrl: "https://github.com/marvinzuniga19/youtube_music_downloader",
  },
];

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full bg-violet-500/20 flex items-center justify-center">
        <span className="text-violet-400 text-sm">Imagen no disponible</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-950/5 to-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-violet-500/30 text-violet-400">
            Portafolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia 
            en desarrollo web y aplicaciones.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ProjectImage src={project.image} alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-violet-500/30 hover:bg-violet-500/10"
                    asChild
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
