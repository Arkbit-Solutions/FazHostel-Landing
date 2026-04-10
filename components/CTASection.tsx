import RevealOnScroll from "./RevealOnScroll";

interface CTASectionProps {
  h2Html?: string;
  description?: string;
  btnText?: string;
}

export default function CTASection({
  h2Html = 'Tu próxima parada<br>en <em>Córdoba.</em>',
  description = "Mejor precio garantizado. Confirmación inmediata por WhatsApp. Te respondemos personalmente, no un bot.",
  btnText = "Escribinos por WhatsApp",
}: CTASectionProps) {
  return (
    <section className="cta">
      <div className="cta-bg" />
      <div className="wrap">
        <RevealOnScroll className="cta-inner">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Reservá ahora
          </span>
          <h2
            style={{ marginTop: 24 }}
            dangerouslySetInnerHTML={{ __html: h2Html }}
          />
          <p>{description}</p>
          <a href="https://wa.me/5493517633333" className="cta-btn">
            <i className="fab fa-whatsapp" /> {btnText}
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
