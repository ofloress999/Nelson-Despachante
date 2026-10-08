import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { images } from "@/config/company";
import { benefits } from "@/data/services";
import { whatsappLinks } from "@/config/links";

export default function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container">
        <div className="about-intro">
          <SectionHeading eyebrow="Sobre a Nelson" title="Compromisso com sua tranquilidade em cada etapa." />
          <p className="reveal">Na Nelson Despachante, nosso propósito é tornar os processos documentais mais simples e acessíveis. Trabalhamos para oferecer orientação clara, atendimento próximo e soluções adequadas às necessidades de cada cliente.</p>
        </div>
        <div className="about-layout">
          <div className="about-image image-reveal"><img src={images.about} alt="Proprietário da Nelson Despachante" loading="lazy" /><span>Clareza para você seguir em frente.</span></div>
          <div className="benefits-grid">
            {benefits.map((item, index) => <article className="benefit" key={item.title}><div><span>0{index + 1}</span><Check size={18} /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
        <div className="about-cta reveal"><h3>Conte com quem entende a importância de cada detalhe.</h3><div><Button href={whatsappLinks.general}>Entre em contato agora</Button><Button simulation variant="outline">Simule seu seguro</Button></div></div>
      </div>
    </section>
  );
}
