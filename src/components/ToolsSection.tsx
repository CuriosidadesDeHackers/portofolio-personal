import { motion } from "framer-motion";
import { Shield, Search, Bot, Bug } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Tool {
  title: string;
  description: string;
  icon: LucideIcon;
  github: string;
}

const tools: Tool[] = [
  {
    title: "Generador CSRF PoC Avanzado — Extensión Burp Suite",
    description: "Extensión profesional para Burp Suite diseñada para automatizar la creación de Proofs of Concept (PoC) de ataques CSRF.",
    icon: Shield,
    github: "https://github.com/CuriosidadesDeHackers/CSRF-PoC-Generator-Avanzado---Burp-Suite-Extension",
  },
  {
    title: "Generador CSRF PoC Web",
    description: "Herramienta web para generar pruebas de concepto (PoC) de ataques CSRF a partir de una petición HTTP completa.",
    icon: Search,
    github: "https://github.com/CuriosidadesDeHackers/CSRF-PoC-Generator",
  },
  {
    title: "Bot Telegram — Gestión de IOCs",
    description: "Bot de Telegram para agregar Indicadores de Compromiso (IOCs) a un archivo AsciiDoc para gestión de CTI.",
    icon: Bot,
    github: "https://github.com/CuriosidadesDeHackers/Telegram-Bot-para-Gestion-de-Indicadores-de-Compromiso-IOCs-y-CTI",
  },
  {
    title: "Subdomain Takeover Scanner",
    description: "Herramienta CLI en Python para identificar y verificar posibles vulnerabilidades de subdomain takeover en un dominio específico.",
    icon: Bug,
    github: "https://github.com/CuriosidadesDeHackers/Subdomain-Takeover-Scanner",
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 sm:py-28 bg-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Herramientas Desarrolladas</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {tools.map((tool, i) => (
            <motion.a
              key={tool.title}
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <tool.icon size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1.5 leading-tight">
                  {tool.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
                <div className="mt-2 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver en GitHub →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
