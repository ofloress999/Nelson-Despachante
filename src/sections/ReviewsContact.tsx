import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { whatsappLinks } from "@/config/links";

const reviews = [
  { name: "Davi Santos", text: "Excelente atendimento do início ao fim. Prestativo, honesto e prático em todo o processo, inclusive na cotação do seguro." },
  { name: "Richard Costa", text: "Atendimento excelente, com grande agilidade na entrega dos serviços e sem burocracia." },
  { name: "Nicolly Codignole", text: "Despachante completo, com atendimento rápido, seguro e prestativo. Recomendo muito!" },
  { name: "Rafael Bellini", text: "Ótimo despachante: serviço completo, atencioso, ágil, com preço justo e praticidade." },
];

export default function ReviewsContact() {
  const [activeReview, setActiveReview] = useState(0);
  const [automatic, setAutomatic] = useState(true);

  useEffect(() => {
    if (!automatic) return;
    const interval = window.setInterval(() => setActiveReview((current) => (current + 1) % reviews.length), 5000);
    return () => window.clearInterval(interval);
  }, [automatic]);

  const selectReview = (direction: -1 | 1) => {
    setAutomatic(false);
    setActiveReview((current) => (current + direction + reviews.length) % reviews.length);
  };

  const review = reviews[activeReview];

  return (
    <>
      <section className="section reviews-section" id="avaliacoes">
        <div className="container reviews-layout">
          <SectionHeading eyebrow="Avaliações" title="A confiança dos nossos clientes faz a diferença." />
          <article className="review-card reveal" aria-live="polite">
            <Quote className="review-quote" size={36} strokeWidth={1.4} aria-hidden="true" />
            <div className="review-stars" aria-label="Avaliação de 5 estrelas">
              {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" />)}
            </div>
            <div className="review-content" key={activeReview}>
              <p>“{review.text}”</p>
              <strong>{review.name}</strong>
              <span>Cliente verificado</span>
            </div>
            <div className="review-controls">
              <span>{String(activeReview + 1).padStart(2, "0")} <i /> {String(reviews.length).padStart(2, "0")}</span>
              <div>
                <button type="button" onClick={() => selectReview(-1)} aria-label="Avaliação anterior"><ChevronLeft size={18} /></button>
                <button type="button" onClick={() => selectReview(1)} aria-label="Próxima avaliação"><ChevronRight size={18} /></button>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="contact-section" id="contato">
        <div className="contact-glow" />
        <div className="container contact-content reveal">
          <span className="contact-icon"><MessageCircle size={28} /></span>
          <div><div className="eyebrow"><span />CONTATO DIRETO</div><h2>Vamos resolver isso <em>juntos?</em></h2><p>Entre em contato com nossa equipe e encontre a orientação que você precisa.</p></div>
          <div className="contact-actions"><Button href={whatsappLinks.general}>Conversar pelo WhatsApp</Button><Button simulation variant="outline">Simular meu seguro</Button></div>
        </div>
      </section>
    </>
  );
}
