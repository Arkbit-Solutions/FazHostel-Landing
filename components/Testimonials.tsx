import RevealOnScroll from "./RevealOnScroll";

const voices = [
  {
    text: "Todo muy limpio, la gente muy linda, el desayuno cumple. Muy buen servicio de la señora que prepara el desayuno, Verónica creo que es, impecable la atención. Sin más que decir, recomiendo 10/10.",
    name: "Díaz",
    initials: "D",
    source: "Booking",
  },
  {
    text: "El departamento un lujo, daba lástima usarlo, todo impecable, muy espacioso. ¡Nos encantó!",
    name: "Martínez",
    initials: "M",
    source: "Booking",
  },
  {
    text: "Superó mis expectativas, muy buen Hostel, súper equipado, excelente trato de todo el personal. La cocina muy bien equipada, las habitaciones amplias, los ambientes compartidos muy lindos. Un mil.",
    name: "Romina",
    initials: "R",
    source: "TripAdvisor",
  },
  {
    text: "Excelente condiciones de las instalaciones, muy cálidos todos los ambientes en común, hermosa la decoración. Destacable la calidad y disponibilidad del personal para atender cualquier duda que uno pueda tener.",
    name: "Luis",
    initials: "L",
    source: "TripAdvisor",
  },
];

function Stars() {
  return (
    <div className="voice-stars">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fas fa-star" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="voices section-pad">
      <div className="wrap">
        <RevealOnScroll className="section-head">
          <div>
            <span className="eyebrow">Voces</span>
            <h2 style={{ marginTop: 22 }}>
              Lo que cuentan
              <br />
              <em>quienes pasan.</em>
            </h2>
          </div>
          <div className="section-head-meta">
            <p>
              No las inventamos. Son palabras de huéspedes reales que dejaron
              algo más que su firma en el libro.
            </p>
          </div>
        </RevealOnScroll>

        <div className="voices-grid">
          {voices.map((v) => (
            <RevealOnScroll className="voice-card" key={v.name}>
              <div className="voice-card-top">
                <Stars />
                <p>{v.text}</p>
              </div>
              <div className="voice-by">
                <div className="voice-avatar">{v.initials}</div>
                <div className="voice-by-info">
                  <strong>{v.name}</strong>
                  <small>{v.source}</small>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
