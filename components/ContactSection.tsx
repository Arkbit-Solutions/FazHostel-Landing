import RevealOnScroll from "./RevealOnScroll";

export default function ContactSection() {
  return (
    <section className="contact section-pad" id="contacto">
      <div className="wrap">
        <div className="contact-grid">
          <RevealOnScroll className="contact-info">
            <span className="eyebrow">Encontranos</span>
            <h2>
              En Cofico,
              <br />
              <em>a un paso del centro.</em>
            </h2>
            <p>
              Estamos a pocas cuadras del centro de Córdoba, en uno de los
              barrios más auténticos de la ciudad. Escribinos y armamos juntos
              tu estadía.
            </p>

            <div className="contact-list">
              <a
                href="https://maps.app.goo.gl/6fjRjAKx9CYteXpv8"
                target="_blank"
                rel="noopener"
                className="contact-row"
              >
                <small>Dirección</small>
                <span>General Paz 1539, Cofico</span>
                <i className="fas fa-map-marker-alt" />
              </a>
              <a
                href="https://wa.me/5493517633333"
                target="_blank"
                rel="noopener"
                className="contact-row"
              >
                <small>WhatsApp</small>
                <span>+54 9 351 763 3333</span>
                <i className="fab fa-whatsapp" />
              </a>
              <a href="mailto:info@fazhostel.com" className="contact-row">
                <small>Email</small>
                <span>info@fazhostel.com</span>
                <i className="fas fa-envelope" />
              </a>
              <div className="contact-row">
                <small>Recepción</small>
                <span>24 horas, todos los días</span>
                <i className="fas fa-clock" />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.5!2d-64.19!3d-31.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDIzJzI0LjAiUyA2NMKwMTEnMjQuMCJX!5e0!3m2!1ses!2sar!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
