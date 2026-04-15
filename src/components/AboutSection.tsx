import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Building2, Award } from "lucide-react";

const stats = [
  { icon: Shield, value: 175, label: "Vulnerabilidades Reportadas" },
  { icon: Building2, value: 67, label: "Organizaciones Ayudadas" },
  { icon: Award, value: 27, label: "Reconocimientos Públicos" },
];

const AnimatedCounter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span>{count}</span>;
};

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 bg-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Sobre Mí</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-foreground/90 text-base leading-relaxed">
              Soy <strong className="text-foreground">Manuel Martínez</strong>, consultor de ciberseguridad, forense digital y participo en operaciones CSIRT.
              Transformo la investigación técnica en resultados: reduzco riesgo, fortalezco controles y protejo sistemas, plataformas y datos críticos.
            </p>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Evalúo infraestructuras, identifico vulnerabilidades y las valido mediante pruebas controladas, con foco en el impacto real y la priorización.
                Además, desarrollo herramientas y automatizaciones que mejoran la capacidad de detección, respuesta y resiliencia.
              </p>
              <p>
                Realizo <strong className="text-foreground/90">divulgación responsable</strong> y coordino reportes con organismos y entidades públicas —
                <strong className="text-foreground/90">Ministerio de Sanidad</strong>, <strong className="text-foreground/90">Comunidad de Madrid</strong>,
                <strong className="text-foreground/90">DGT</strong>, <strong className="text-foreground/90">Junta de Andalucía</strong>,
                <strong className="text-foreground/90">Guardia Civil</strong>, <strong className="text-foreground/90">CERT de Europa</strong>,
                <strong className="text-foreground/90">UCO</strong>, universidades y otras organizaciones—, colaborando también con instituciones como la
                <strong className="text-foreground/90"> ONU</strong> y el <strong className="text-foreground/90">INTA</strong>.
              </p>
              <p>
                Participo en programas de bug bounty (<strong className="text-foreground/90">HackerOne</strong>, <strong className="text-foreground/90">Bugcrowd</strong>),
                donde he identificado vulnerabilidades en organizaciones de primer nivel. He sido incluido en los <strong className="text-foreground/90">Hall of Fame</strong> de la
                <strong className="text-foreground/90"> NASA</strong>, <strong className="text-foreground/90">Berlín</strong>, <strong className="text-foreground/90">Ámsterdam</strong> y del
                <strong className="text-foreground/90"> CERT de Europa</strong>.
              </p>
              <p>
                Diseño y mantengo planes de respuesta a incidentes (IRP/playbooks), coordino actividades CSIRT y ejecuto procesos DFIR.
                Complemento estas tareas con threat hunting, simulacros de crisis, formación a equipos técnicos y directivos, y automatización de triage.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-lg border border-border bg-card">
              <h3 className="text-sm font-semibold text-foreground mb-2">Proyectos Destacados</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Fundé <strong className="text-foreground/90">Curiosidades De Hackers</strong>, un proyecto divulgativo que integra blog, formación y herramientas.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li><strong className="text-foreground/90">The Hackers Labs:</strong> retos estilo CTF con entornos realistas.</li>
                <li><strong className="text-foreground/90">Bug Bounty Labs:</strong> laboratorio centrado en simulación de errores reales.</li>
              </ul>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={ref}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors group"
              >
                <stat.icon size={20} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-foreground font-display mb-1">
                  <AnimatedCounter target={stat.value} inView={inView} />+
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
