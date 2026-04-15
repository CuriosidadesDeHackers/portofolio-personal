import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import certADRTS from "@/assets/certs/AD_RTS.png";
import certECPPT from "@/assets/certs/ecppt.jpg";
import certEJPT from "@/assets/certs/ejpt.jpg";
import certCPTS from "@/assets/certs/cpts.jpg";
import certEWPTX from "@/assets/certs/ewptx.jpg";
import certEMAPT from "@/assets/certs/emapt.png";
import certMCRTA from "@/assets/logos/mcrta.jpg";
import certCRTA from "@/assets/certs/crta.jpg";
import certICCA from "@/assets/certs/icca.jpg";
import certC3SA from "@/assets/certs/C3SA.png";
import certBTF from "@/assets/certs/BTF.png";
import certCRTID from "@/assets/certs/CRT-ID.png";
import certCWES from "@/assets/certs/cwes.png";

interface Cert {
  title: string;
  issuer: string;
  image?: string;
  credential: string;
}

const certifications: Cert[] = [
  { title: "Certified Penetration Testing Specialist (CPTS)", issuer: "Hack The Box", image: certCPTS, credential: "https://www.hackthebox.com/" },
  { title: "Certified Web Exploitation Specialist (CWES)", issuer: "Hack The Box", image: certCWES, credential: "https://www.hackthebox.com/" },
  { title: "Web Application Penetration Tester eXtreme", issuer: "INE", image: certEWPTX, credential: "https://certs.ine.com/8294c40d-a8b5-4189-bf99-09284c45e841#acc.CqFMcDGL" },
  { title: "Certified Professional Penetration Tester", issuer: "INE", image: certECPPT, credential: "https://certs.ine.com/0215ca77-7708-4125-8b4b-5bd2bdd7472f#acc.8sudFSR3" },
  { title: "Mobile Application Penetration Tester (eMAPT)", issuer: "INE", image: certEMAPT, credential: "https://certs.ine.com/25256d84-8634-4105-89a3-287e99ae8803#acc.9VAWEiTR" },
  { title: "Multi-Cloud Red Team Analyst Professional", issuer: "Cyberwarfare Labs", image: certMCRTA, credential: "https://labs.cyberwarfare.live/credential/achievement/68dc0b58ed96cecda45137b5" },
  { title: "Certified Red Team Analyst", issuer: "Cyberwarfare Labs", image: certCRTA, credential: "https://labs.cyberwarfare.live/credential/achievement/68a09cf4bf373ee66a1f745f" },
  { title: "INE Certified Cloud Associate", issuer: "INE", image: certICCA, credential: "https://certs.ine.com/c2e7ab14-35df-4323-96e2-cbc201aab366#acc.fUaJn45A" },
  { title: "Active Directory Red Team Specialist", issuer: "Cyberwarfare Labs", image: certADRTS, credential: "https://labs.cyberwarfare.live/credential/achievement/68ed37adcd29f547b6697962" },
  { title: "Cyber Security Analyst (C3SA)", issuer: "Cyberwarfare Labs", image: certC3SA, credential: "https://labs.cyberwarfare.live/credential/achievement/68fc715929a45c6e4bae9d8e" },
  { title: "Blue Team Fundamentals (BTF)", issuer: "Cyberwarfare Labs", image: certBTF, credential: "https://labs.cyberwarfare.live/credential/achievement/68f9c4f0b92934ef2ad87305" },
  { title: "Junior Penetration Tester", issuer: "INE", image: certEJPT, credential: "https://certs.ine.com/bde4ef95-3cb1-4901-8954-ff04a73fd310#acc.8wJy0lN5" },
  { title: "Red Team Infrastructure Developer (CRT-ID)", issuer: "Cyberwarfare Labs", image: certCRTID, credential: "https://labs.cyberwarfare.live/credential/achievement/68fcdf562e1ff651b77d4b60" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Certificaciones</h2>
          <div className="w-12 h-0.5 bg-primary mb-10" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.credential}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-lg border border-border bg-card overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-surface-elevated p-4">
                    <span className="text-xs text-muted-foreground text-center font-mono leading-tight">
                      {cert.title.split("(").pop()?.replace(")", "") || cert.title.split(" ").slice(-1)[0]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                  <ExternalLink size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-semibold text-foreground leading-tight mb-1 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
