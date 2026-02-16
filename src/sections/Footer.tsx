import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/marvinzuniga19", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/marvin-z%C3%BAniga-alvarado-06b3361b0/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:tu@email.com", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a
            href="#inicio"
            className="text-2xl font-bold gradient-text mb-6"
          >
            Redes
          </a>

          {/* Social links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
