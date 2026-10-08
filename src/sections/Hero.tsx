import { ChevronDown } from "lucide-react";
import Button from "@/components/Button";
import { images } from "@/config/company";
import { whatsappLinks } from "@/config/links";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-media" aria-hidden="true">
        <img src={images.hero} alt="" fetchPriority="high" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-lines" aria-hidden="true"><i /><i /><i /></div>
      <div className="container hero-content">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span />NELSON DESPACHANTE</div>
          <h1>
            <span className="hero-line"><span>Menos burocracia.</span></span>
            <span className="hero-line"><span>Mais <em>tranquilidade</em></span></span>
            <span className="hero-line"><span>para você.</span></span>
          </h1>
          <p className="hero-subtitle">Soluções em documentação veicular, serviços de CNH e cotação de seguros. Praticidade e atendimento personalizado para o que você precisa.</p>
          <div className="hero-actions">
            <Button simulation>Simule seu seguro</Button>
            <Button href={whatsappLinks.general} variant="outline">Fale com um especialista</Button>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true"><strong>01</strong><span>Atendimento<br />sem complicação</span></div>
      </div>
      <a className="scroll-cue" href="#servicos-veiculares"><span>Explore</span><i><ChevronDown size={17} /></i></a>
    </section>
  );
}
