import { ArrowUpRight, Camera, Mail, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { company } from "@/config/company";
import { ADDRESS, EMAIL, INSTAGRAM_URL, whatsappLinks } from "@/config/links";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{company.description}</p>
        </div>
        <div>
          <h3>Navegação</h3>
          <a href="#inicio">Início</a><a href="#servicos-veiculares">Serviços veiculares</a>
          <a href="#servicos-cnh">Serviços de CNH</a><a href="#sobre">Sobre nós</a>
          <a href="#avaliacoes">Avaliações</a><a href="#contato">Contato</a>
        </div>
        <div>
          <h3>Contato</h3>
          <a href={whatsappLinks.general} target="_blank" rel="noreferrer"><MessageCircle size={16} />{company.phone}</a>
          {ADDRESS ? <span><MapPin size={16} />{ADDRESS}</span> : <span className="muted"><MapPin size={16} />Endereço a confirmar</span>}
          {INSTAGRAM_URL ? <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Camera size={16} />Instagram</a> : <span className="muted"><Camera size={16} />Instagram a confirmar</span>}
          {EMAIL ? <a href={`mailto:${EMAIL}`}><Mail size={16} />{EMAIL}</a> : <span className="muted"><Mail size={16} />E-mail a confirmar</span>}
        </div>
        <div>
          <h3>Soluções</h3>
          <span>Serviços veiculares</span><span>Serviços de CNH</span><span>Cotação de seguros</span>
          <div className="footer-actions"><Button simulation variant="outline">Simular seguro</Button><Button href={whatsappLinks.general} variant="ghost">WhatsApp <ArrowUpRight size={15} /></Button></div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} — Nelson Despachante. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
