import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import thlImg from "@/assets/logos/thl.png";
import cdh2Img from "@/assets/logos/cdh2.png";
import bblImg from "@/assets/logos/bbl.png";
import iocsImg from "@/assets/logos/IOCs.png";
import tsdImg from "@/assets/logos/TSD.png";
import ctiImg from "@/assets/logos/cti.png";

const projects = [
  {
    title: "The Hackers Labs",
    description: "Plataforma de CTFs y retos de ciberseguridad donde se explora el fascinante mundo de la seguridad a través de laboratorios vulnerables y escenarios realistas.",
    url: "https://thehackerslabs.com/",
    image: thlImg,
    tags: ["CTF", "Laboratorios", "Pentesting"],
  },
  {
    title: "Curiosidades De Hackers",
    description: "Portal de artículos, resúmenes, proyectos y nuevas tecnologías en el ámbito de la ciberseguridad, con el objetivo de compartir conocimiento de forma gratuita.",
    url: "https://curiosidadesdehackers.com/",
    image: cdh2Img,
    tags: ["Blog", "Formación", "Recursos"],
  },
  {
    title: "Bug Bounty Labs",
    description: "Plataforma de laboratorios vulnerables para practicar hacking web y prepararte para mejorar tus habilidades en bug bounty.",
    url: "https://bugbountylabs.com/",
    image: bblImg,
    tags: ["CTF", "Laboratorios", "Bug Bounty"],
  },
  {
    title: "IOC Dashboard - Cyber Intelligence",
    description: "Dashboard para visualizar y gestionar Indicadores de Compromiso (IOCs) de ciberseguridad.",
    url: "https://iocs.curiosidadesdehackers.com/",
    image: iocsImg,
    tags: ["IOC", "Intelligence", "Threat"],
  },
  {
    title: "My Threat Intel (CTI Dashboard)",
    description: "Panel de control (dashboard) avanzado para analistas de ciberseguridad y Centros de Operaciones de Seguridad (SOC). Interfaz táctica inspirada en entornos militares/cyber para monitorizar y gestionar inteligencia de amenazas (CTI).",
    url: "https://mythreatintel.com/",
    image: ctiImg,
    tags: ["CTI", "SOC", "Threat Intelligence"],
  },
  {
    title: "Tu Senda Digital",
    description: "Desarrollo de páginas web profesionales y estrategias de marketing digital para atraer clientes y hacer crecer tu negocio online.",
    url: "https://tusendadigital.com/",
    image: tsdImg,
    tags: ["Web", "Desarrollo", "Marketing"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Mis Proyectos</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl border border-border bg-card hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 overflow-hidden flex flex-col"
            >
              {/* Image */}
              {project.image ? (
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary/30">{project.title.charAt(0)}</span>
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-0.5 flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
