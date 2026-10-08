import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { images } from "@/config/company";
import { whatsappLinks } from "@/config/links";
import { licenseServices } from "@/data/services";

export default function LicenseServices() {
  return (
    <section className="section license-section" id="servicos-cnh">
      <div className="container license-layout">
        <div className="license-visual image-reveal">
          <img src={images.license} alt="Interior sofisticado de veículo, representando mobilidade e habilitação" loading="lazy" />
          <div className="image-tag"><strong>CNH</strong><span>Orientação em cada etapa</span></div>
        </div>
        <div className="license-content">
          <SectionHeading eyebrow="Serviços de CNH" title="Sua habilitação em boas mãos." description="Conte com orientação para diferentes procedimentos relacionados à sua Carteira Nacional de Habilitação." />
          <ol className="license-list">
            {licenseServices.map((item, index) => <li key={item}><span>0{index + 1}</span><h3>{item}</h3><i>↗</i></li>)}
          </ol>
          <div className="inline-cta reveal"><div><span>Precisa de ajuda com sua CNH?</span></div><Button href={whatsappLinks.license}>Falar com um especialista</Button><Button simulation variant="ghost">Simular meu seguro</Button></div>
        </div>
      </div>
    </section>
  );
}
