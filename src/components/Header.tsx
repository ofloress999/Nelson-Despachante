import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Logo from "./Logo";
import Button from "./Button";
import { whatsappLinks } from "@/config/links";

const nav = [
  ["Início", "inicio"],
  ["Serviços Veiculares", "servicos-veiculares"],
  ["Serviços de CNH", "servicos-cnh"],
  ["Sobre Nós", "sobre"],
  ["Avaliações", "avaliacoes"],
  ["Contato", "contato"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!panel.current) return;
    gsap.to(panel.current, {
      autoAlpha: open ? 1 : 0,
      y: open ? 0 : -16,
      duration: 0.4,
      ease: "power3.out",
      pointerEvents: open ? "auto" : "none",
    });
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#inicio" className="header-logo" aria-label="Ir para o início"><Logo /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <Button href={whatsappLinks.general} className="header-cta">Fale conosco</Button>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="mobile-panel" ref={panel} aria-hidden={!open}>
        <nav aria-label="Navegação móvel">
          {nav.map(([label, id], index) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
          <Button href={whatsappLinks.general}>Fale conosco</Button>
        </nav>
      </div>
    </header>
  );
}
