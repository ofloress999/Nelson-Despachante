import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { vehicleServices } from "@/data/services";
import { whatsappLinks } from "@/config/links";

export default function VehicleServices() {
  return (
    <section className="section vehicle-section" id="servicos-veiculares">
      <div className="section-number" aria-hidden="true">02</div>
      <div className="container">
        <SectionHeading eyebrow="Serviços veiculares" title="Seu veículo regularizado, sem complicações." description="Orientação e suporte para resolver processos documentais e manter seu veículo em dia." />
        <div className="services-grid">
          {vehicleServices.map(({ title, description, icon: Icon }, index) => (
            <article className="service-card" key={title}>
              <div className="service-card__top"><span>0{index + 1}</span><Icon size={24} strokeWidth={1.5} /></div>
              <h3>{title}</h3><p>{description}</p>
              <a href={whatsappLinks.vehicle} target="_blank" rel="noreferrer">Consultar serviço <span>↗</span></a>
            </article>
          ))}
        </div>
        <div className="section-cta reveal">
          <div><span>Pronto para começar?</span><h3>Precisa resolver a documentação do seu veículo?</h3></div>
          <div><Button href={whatsappLinks.vehicle}>Solicitar atendimento</Button><Button simulation variant="outline">Simular meu seguro</Button></div>
        </div>
      </div>
    </section>
  );
}
