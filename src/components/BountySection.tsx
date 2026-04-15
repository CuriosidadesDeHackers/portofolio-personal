import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import nasaLogo from "@/assets/logos/nasa.jpg";
import onuLogo from "@/assets/logos/onu.png";
import berlinLogo from "@/assets/logos/berlin.png";
import californiaLogo from "@/assets/logos/california.png";
import cajamarLogo from "@/assets/logos/cajamar.png";
import ccooLogo from "@/assets/logos/ccoo.png";
import caLogo from "@/assets/logos/ca.png";
import intaLogo from "@/assets/logos/inta.png";
import guardiaCivilLogo from "@/assets/logos/guardiacivil.png";
import enaireLogo from "@/assets/logos/enaire.png";
import icexLogo from "@/assets/logos/icex.png";
import bdeLogo from "@/assets/logos/bde.png";
import euLogo from "@/assets/logos/eu.png";
import aemetLogo from "@/assets/logos/aemet.png";
import congresoLogo from "@/assets/logos/congreso.png";
import madridLogo from "@/assets/logos/madrid.png";
import dgtLogo from "@/assets/logos/dgt.png";
import andaluciaLogo from "@/assets/logos/andalucia.png";
import ucoLogo from "@/assets/logos/UCO.png";
import cnpLogo from "@/assets/logos/CNP.png";
import rtvaLogo from "@/assets/logos/RTVA.png";
import huelvaLogo from "@/assets/logos/huelva.png";
import granadaLogo from "@/assets/logos/granada.png";
import dipuGranadaLogo from "@/assets/logos/dipu granada.png";
import catalunyaLogo from "@/assets/logos/catalunya.png";
import uc3mLogo from "@/assets/logos/uc3m.png";
import sanidadLogo from "@/assets/logos/sanitad.png";
import dipuMalagaLogo from "@/assets/logos/dipu malaga.png";
import elpaisLogo from "@/assets/logos/elpais.png";
import uniGranadaLogo from "@/assets/logos/uni-granada.png";
import uniBarcelonaLogo from "@/assets/logos/unibarcelona.png";
import icagrLogo from "@/assets/logos/icagr.png";
import divalLogo from "@/assets/logos/dival.png";
import nestleLogo from "@/assets/logos/nestle.png";
import teslaLogo from "@/assets/logos/tesla.jpg";
import telefonicaLogo from "@/assets/logos/telefonica.jpg";
import snapchatLogo from "@/assets/logos/snapchat.png";
import justLogo from "@/assets/logos/just.png";
import indeedLogo from "@/assets/logos/indeed.png";
import airbnbLogo from "@/assets/logos/airbnb.png";
import adobeLogo from "@/assets/logos/adobe.png";
import amazonLogo from "@/assets/logos/amazon.png";
import adpLogo from "@/assets/logos/adp.png";
import dodLogo from "@/assets/logos/dod.png";
import harvardLogo from "@/assets/logos/harvard.png";
import fisLogo from "@/assets/logos/fis.jpeg";
import glovoLogo from "@/assets/logos/glovo.png";
import amsLogo from "@/assets/logos/ams.png";
import nnuuLogo from "@/assets/logos/NNUU.png";
import securitasLogo from "@/assets/logos/securitas.png";
import unedLogo from "@/assets/logos/uned.png";
import unirLogo from "@/assets/logos/unir.png";
import usgsLogo from "@/assets/logos/usgs.png";

interface OrgItem {
  name: string;
  link: string;
  logo?: string;
}

const publicAdmins: OrgItem[] = [
  { name: "Naciones Unidas", link: "https://www.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_agradecimiento-de-united-nations-tras-reportar-activity-7339220751469670402-dxTe", logo: onuLogo },
  { name: "I. Nacional de T. Aeroespacial", link: "https://media.licdn.com/dms/image/v2/D4E2DAQF32OUCLiOQwA/profile-treasury-image-shrink_1920_1920/B4EZlJ_dwbKcAc-/0/1757882998156", logo: intaLogo },
  { name: "Guardia Civil", link: "https://www.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_vulnerabilidades-ciberseguridad-guardiacivil-activity-7359524283250798592-JZnq", logo: guardiaCivilLogo },
  { name: "Enaire", link: "https://www.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_vulnerabilidad-ciberseguridad-gestordenavegaciaejnaaezrea-activity-7363953200342728704-TH5D", logo: enaireLogo },
  { name: "ICEX", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: icexLogo },
  { name: "Banco De España", link: "https://www.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_ciberseguridad-ethicalhacking-securityresearch-activity-7368691951006621699-SMDO", logo: bdeLogo },
  { name: "Unión Europea", link: "https://www.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_cybersecurity-certabreu-halloffame-activity-7365743588351123456-UrVu", logo: euLogo },
  { name: "AEMET", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: aemetLogo },
  { name: "Congreso de los Diputados", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: congresoLogo },
  { name: "Comunidad De Madrid", link: "https://www.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_vulnerabilidad-madrid-comunidaddemadrid-activity-7299142200989212673-1kTi", logo: madridLogo },
  { name: "Dirección General de Tráfico", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: dgtLogo },
  { name: "Junta de Andalucía", link: "https://www.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_vulnerabilidad-andalucaeda-ciberseguridad-activity-7290809215621754881-x8i5", logo: andaluciaLogo },
  { name: "UCO", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: ucoLogo },
  { name: "Policía Nacional", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: cnpLogo },
  { name: "Televisión Andalucía", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: rtvaLogo },
  { name: "Ayuntamiento de Huelva", link: "https://www.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_vulnerabilidad-andalucia-huelva-activity-7296212718900948992-N4E9", logo: huelvaLogo },
  { name: "Ayuntamiento de Granada", link: "https://www.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_vulnerabilidad-granada-ciberseguridad-activity-7272689179778551809-NKeG", logo: granadaLogo },
  { name: "Diputación de Granada", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: dipuGranadaLogo },
  { name: "Generalidad de Cataluña", link: "https://media.licdn.com/dms/image/v2/D4E2DAQHRr4fG9Uq7EA/profile-treasury-image-shrink_800_800/B4EZlJ8QpRKcAY-/0/1757882158044", logo: catalunyaLogo },
  { name: "Universidad Carlos III", link: "https://www.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_vulnerabilidad-universidad-madrid-activity-7305300071355416576-ZONp", logo: uc3mLogo },
  { name: "Ministerio de Sanidad", link: "https://es.linkedin.com/posts/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289_vulnerabilidad-ministeriodesanidad-gobiernodeespa%C3%B1a-activity-7308882919169687552-MThN", logo: sanidadLogo },
  { name: "Diputación de Málaga", link: "https://media.licdn.com/dms/image/v2/D4E2DAQHnFvi34iSqvA/profile-treasury-image-shrink_800_800/B4EZlJ84MgKYAY-/0/1757882320101", logo: dipuMalagaLogo },
  { name: "El País", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: elpaisLogo },
  { name: "Cajamar", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: cajamarLogo },
  { name: "Comisiones Obreras", link: "https://media.licdn.com/dms/image/v2/D4E2DAQEu3Xp-aO6MKA/profile-treasury-image-shrink_1920_1920/B4EZlJ9N3tIoAc-/0/1757882408843", logo: ccooLogo },
  { name: "Universidad de Granada", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: uniGranadaLogo },
  { name: "Universidad de Barcelona", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: uniBarcelonaLogo },
  { name: "I.C. Abogados de Granada", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: icagrLogo },
  { name: "Diputación de Valencia", link: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-casasola/", logo: divalLogo },
];

const companies: OrgItem[] = [
  { name: "NASA", link: "#", logo: nasaLogo },
  { name: "Nestlé", link: "#", logo: nestleLogo },
  { name: "Tesla", link: "#", logo: teslaLogo },
  { name: "Telefónica", link: "#", logo: telefonicaLogo },
  { name: "Snapchat", link: "#", logo: snapchatLogo },
  { name: "Just Eat", link: "#", logo: justLogo },
  { name: "Indeed", link: "#", logo: indeedLogo },
  { name: "Airbnb", link: "#", logo: airbnbLogo },
  { name: "Adobe", link: "#", logo: adobeLogo },
  { name: "Amazon", link: "#", logo: amazonLogo },
  { name: "ADP", link: "#", logo: adpLogo },
  { name: "Department of Defense", link: "#", logo: dodLogo },
  { name: "CA Technologies", link: "#", logo: caLogo },
  { name: "Harvard University", link: "#", logo: harvardLogo },
  { name: "FIS Global", link: "#", logo: fisLogo },
  { name: "Glovo", link: "#", logo: glovoLogo },
];

const tabs = [
  { id: "public", label: "Administraciones Públicas", data: publicAdmins },
  { id: "companies", label: "Empresas", data: companies },
] as const;

const OrgCard = ({ item, variant }: { item: OrgItem; variant: "public" | "companies" }) => {
  const isPublic = variant === "public";
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all overflow-hidden"
    >
      {/* Image area */}
      <div className={`flex items-center justify-center bg-foreground/5 ${isPublic ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
        {item.logo ? (
          <img
            src={item.logo}
            alt={item.name}
            className="w-full h-full object-contain p-4"
          />
        ) : (
          <span className="text-3xl font-bold text-primary/30">{item.name.charAt(0)}</span>
        )}
      </div>
      {/* Label */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-border">
        <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors truncate">
          {item.name}
        </span>
        <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
      </div>
    </a>
  );
};

const BountySection = () => {
  const [activeTab, setActiveTab] = useState<string>("public");
  const activeData = tabs.find((t) => t.id === activeTab)!.data;

  return (
    <section id="bounty" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Organizaciones a las que he ayudado
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-8" />
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 p-1 bg-card rounded-lg border border-border w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              <span className="ml-1.5 text-xs opacity-70">({tab.data.length})</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {activeData.map((item) => (
            <OrgCard key={item.name} item={item} variant={activeTab as "public" | "companies"} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BountySection;
