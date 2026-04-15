import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

import hacken2025 from "@/assets/events/hacken2025.jpeg";
import rooted2026 from "@/assets/events/rooted2026.jpeg";
import hacken2026 from "@/assets/events/hacken2026.jpeg";

const events = [
  {
    title: "CTF en Hackén 2026",
    date: "17-18 de abril 2026",
    location: "Palacio de Ferias y Congresos de Jaén",
    image: hacken2025,
  },
  {
    title: "RootedCON Madrid 2026",
    date: "5-7 de marzo 2026",
    location: "Kinépolis, Madrid",
    image: rooted2026,
  },
  {
    title: "CTF en Hackén 2025",
    date: "30-31 de mayo 2025",
    location: "IFEJA, Jaén",
    image: hacken2026,
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 sm:py-28 bg-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Eventos Organizados</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={14} className="text-primary flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-primary flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
