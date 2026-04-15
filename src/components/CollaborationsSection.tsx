import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import hackercarImg from "@/assets/collabs/hackercar.png";
import elladodelmalImg from "@/assets/collabs/elladodelmal.png";

const collaborations = [
  {
    title: "HackerCar",
    description: "Artículos sobre ciberseguridad, motor y tecnología publicados en HackerCar.",
    url: "https://hackercar.com/author/manuel-martinez/",
    image: hackercarImg,
  },
  {
    title: "El Lado del Mal",
    description: "Colaboración en el blog personal de Chema Alonso, referente en ciberseguridad.",
    url: "https://www.elladodelmal.com/2025/05/the-hacker-labs-aprender-ser-pentester.html",
    image: elladodelmalImg,
  },
];

const CollaborationsSection = () => {
  return (
    <section id="collaborations" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Colaboraciones</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {collaborations.map((collab, i) => (
            <motion.a
              key={collab.title}
              href={collab.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 overflow-hidden flex flex-col"
            >
              <div className="h-40 overflow-hidden bg-muted flex items-center justify-center">
                <img
                  src={collab.image}
                  alt={collab.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {collab.title}
                  </h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-0.5 flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {collab.description}
                </p>
                <div className="mt-3 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver colaboración →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
