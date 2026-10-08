import { ArrowUpRight, Clock3 } from "lucide-react";
import { SIMULATION_URL } from "@/config/links";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  simulation?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  simulation = false,
  className = "",
}: Props) {
  const disabled = simulation && !SIMULATION_URL;
  const finalHref = simulation ? SIMULATION_URL : href;

  if (disabled) {
    return (
      <span className={`btn btn--${variant} btn--disabled ${className}`} aria-disabled="true">
        {children}
        <span className="btn__soon">Em breve</span>
        <Clock3 size={15} />
      </span>
    );
  }

  return (
    <a
      className={`btn btn--${variant} ${className}`}
      href={finalHref}
      target={finalHref?.startsWith("http") ? "_blank" : undefined}
      rel={finalHref?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
