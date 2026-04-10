export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-main">
            <div className="hero-meta">
              <div className="hero-meta-row">
                Diseñado para viajar <span /> pensado para quedarse
              </div>
              <div className="hero-meta-row">Cofico, Córdoba, Argentina</div>
            </div>
            <h1 className="hero-title">
              Quedate.
              <br />
              <em>Vivilo.</em>
            </h1>
            <p className="hero-tagline">
              Un hostel pequeño en el corazón de Cofico. Habitaciones honestas,
              buena cocina y la calidez de quien te recibe en su casa.
            </p>
          </div>
          <div className="hero-side">
            <p className="hero-quote">
              &ldquo;No es solo un lugar para dormir. Es donde el viaje se
              vuelve historia.&rdquo;
            </p>
            <a href="https://wa.me/5493517633333" className="hero-cta">
              Reservá tu estadía
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
