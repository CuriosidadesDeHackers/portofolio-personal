import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Contacto</h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />

          <p className="text-muted-foreground text-base mb-10 leading-relaxed">
            ¿Interesado en mejorar la seguridad de tu organización? ¿Necesitas una auditoría de seguridad o tienes alguna consulta?
            Estoy disponible para colaboraciones y servicios profesionales.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <a
              href="mailto:manummartinez@proton.me"
              className="group flex items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                <div className="text-sm text-foreground font-medium truncate">manummartinez@proton.me</div>
              </div>
              <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </a>

            <a
              href="https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Linkedin size={20} className="text-primary" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="text-xs text-muted-foreground mb-0.5">LinkedIn</div>
                <div className="text-sm text-foreground font-medium">Manuel Martínez</div>
              </div>
              <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
