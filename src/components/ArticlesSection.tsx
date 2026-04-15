import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import dfirAccesoRemoto from "@/assets/articles/dfir-acceso-remoto.png";
import mftIntrusion from "@/assets/articles/mft-intrusion.png";
import mftVelociraptor from "@/assets/articles/mft-velociraptor.jpg";
import arsenalMounter from "@/assets/articles/arsenal-mounter.jpg";

const articles = [
  {
    title: "Análisis DFIR de Acceso Remoto, Exfiltración de Datos y Eliminación de Evidencias",
    description: "Análisis forense de un incidente que involucra acceso remoto, exfiltración de datos y técnicas de eliminación de evidencias.",
    image: dfirAccesoRemoto,
    url: "https://curiosidadesdehackers.com/analisis-dfir-de-acceso-remoto-exfiltracion-de-datos-y-eliminacion-de-evidencias/",
  },
  {
    title: "Reconstrucción de una Intrusión en Windows a partir de la MFT",
    description: "Análisis forense basado exclusivamente en metadatos NTFS para reconstruir una intrusión en sistemas Windows.",
    image: mftIntrusion,
    url: "https://curiosidadesdehackers.com/reconstruccion-de-una-intrusion-en-windows-a-partir-de-la-mft-analisis-forense-basado-exclusivamente-en-metadatos-ntfs/",
  },
  {
    title: "Análisis Forense de la Master File Table (MFT) con Velociraptor",
    description: "Investigaciones DFIR utilizando Velociraptor para el análisis forense de la MFT en sistemas de archivos NTFS.",
    image: mftVelociraptor,
    url: "https://curiosidadesdehackers.com/analisis-forense-de-la-master-file-table-mft-en-investigaciones-dfir-con-velociraptor/",
  },
  {
    title: "Implementación de Arsenal Image Mounter para Montaje Inmutable de Imágenes Forenses",
    description: "Montaje inmutable de imágenes forenses en procesos de Digital Forensics & Incident Response (DFIR).",
    image: arsenalMounter,
    url: "https://curiosidadesdehackers.com/implementacion-de-arsenal-image-mounter-para-el-montaje-inmutable-de-imagenes-forenses-en-procesos-de-digital-forensics-incident-response-dfir/",
  },
  {
    title: "Robo de Subdominios (Subdomain Takeover)",
    description: "Los subdomain takeover ocurren cuando un subdominio apunta a un servicio externo como GitHub Pages, AWS S3, Heroku, etc.",
    image: "https://curiosidadesdehackers.com/wp-content/uploads/2025/05/b812bd73-b85f-444b-983c-2b20654c8c41-800x445.jpg",
    url: "https://curiosidadesdehackers.com/robo-de-subdominiossubdomain-takeover-explicacion-y-poc/",
  },
  {
    title: "Web Cache Deception",
    description: "Técnica en la que un atacante engaña a un servidor de caché web para que almacene y sirva contenido que no debería estar en la caché.",
    image: "https://curiosidadesdehackers.com/wp-content/uploads/2025/04/sss-800x445.jpg",
    url: "https://curiosidadesdehackers.com/web-cache-deception/",
  },
  {
    title: "Web Cache Poisoning",
    description: "Técnica avanzada mediante la cual un atacante explota el comportamiento de un servidor web y su caché para entregar respuestas HTTP dañinas.",
    image: "https://curiosidadesdehackers.com/wp-content/uploads/2025/04/ffc25661-87e3-4de1-abaf-c9631cd7a9ce-800x445.jpeg",
    url: "https://curiosidadesdehackers.com/web-cache-poisoningenvenenamiento-de-cache-explicacion-y-poc/",
  },
  {
    title: "Bypass al 2FA",
    description: "2FA es un método de seguridad que requiere dos pasos diferentes para verificar la identidad de un usuario, añadiendo una segunda capa de seguridad.",
    image: "https://curiosidadesdehackers.com/wp-content/uploads/2024/09/63174747-ada3-42e9-b421-edbe64e75ba7-800x445.jpg",
    url: "https://curiosidadesdehackers.com/bypass-al-2fasegundo-factor-de-autenticacion-explicacion-y-poc/",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Últimos Artículos</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-lg border border-border bg-card overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Leer artículo <ExternalLink size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
