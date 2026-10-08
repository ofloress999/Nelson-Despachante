export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={`section-heading section-heading--${align} reveal`}>
      <div className="eyebrow"><span />{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
