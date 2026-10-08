import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import VehicleServices from "@/sections/VehicleServices";
import LicenseServices from "@/sections/LicenseServices";
import About from "@/sections/About";
import ReviewsContact from "@/sections/ReviewsContact";
import Button from "@/components/Button";
import { whatsappLinks } from "@/config/links";
import { MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  const app = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set([".hero-eyebrow", ".hero-line > span", ".hero-subtitle", ".hero-actions", ".scroll-cue"], { clearProps: "all" });
      return;
    }

    const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
    hero.from(".hero-media img", { scale: 1.1, duration: 1.8 })
      .from(".hero-eyebrow", { y: 20, autoAlpha: 0, duration: 0.6 }, 0.25)
      .from(".hero-line > span", { yPercent: 115, duration: 0.9, stagger: 0.1 }, 0.4)
      .from(".hero-subtitle", { y: 24, autoAlpha: 0, duration: 0.65 }, 0.85)
      .from(".hero-actions > *", { y: 18, autoAlpha: 0, duration: 0.55, stagger: 0.1 }, 1)
      .from(".scroll-cue", { autoAlpha: 0, duration: 0.5 }, 1.3);

    gsap.to(".hero-media img", {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 },
    });

    gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
      gsap.from(element, { y: 44, autoAlpha: 0, duration: 0.9, scrollTrigger: { trigger: element, start: "top 86%", once: true } });
    });
    gsap.utils.toArray<HTMLElement>(".services-grid").forEach((grid) => {
      gsap.from(grid.children, { y: 45, autoAlpha: 0, duration: 0.75, stagger: 0.08, scrollTrigger: { trigger: grid, start: "top 82%", once: true } });
    });
    gsap.from(".license-list li", { x: 35, autoAlpha: 0, stagger: 0.1, duration: 0.7, scrollTrigger: { trigger: ".license-list", start: "top 82%", once: true } });
    gsap.from(".benefit", { y: 36, autoAlpha: 0, stagger: 0.1, duration: 0.75, scrollTrigger: { trigger: ".benefits-grid", start: "top 82%", once: true } });
    gsap.utils.toArray<HTMLElement>(".image-reveal").forEach((image) => {
      gsap.from(image, { clipPath: "inset(0 100% 0 0)", duration: 1.2, ease: "power3.inOut", scrollTrigger: { trigger: image, start: "top 82%", once: true } });
      const img = image.querySelector("img");
      if (img) gsap.to(img, { yPercent: 8, ease: "none", scrollTrigger: { trigger: image, start: "top bottom", end: "bottom top", scrub: 1 } });
    });
  }, { scope: app });

  return (
    <div ref={app}>
      <Header />
      <main>
        <Hero />
        <VehicleServices />
        <LicenseServices />
        <About />
        <ReviewsContact />
      </main>
      <Footer />
      <Button href={whatsappLinks.general} className="mobile-whatsapp"><MessageCircle size={19} /> WhatsApp</Button>
    </div>
  );
}
