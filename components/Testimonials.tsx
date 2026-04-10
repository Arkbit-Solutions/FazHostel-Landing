import RevealOnScroll from "./RevealOnScroll";

const voices = [
  {
    text: "Superó mis expectativas. Súper equipado y con un trato del personal que se siente genuino. Vuelvo cada vez que paso por Córdoba.",
    name: "María C.",
    from: "Buenos Aires, Argentina",
  },
  {
    text: "Lo que más destaco: la calidez del personal. Siempre atentos, siempre dispuestos. Las instalaciones, impecables.",
    name: "Javier L.",
    from: "Madrid, España",
  },
  {
    text: "Limpieza impecable, ubicación ideal y una onda espectacular. Conocés gente de todos lados y te sentís en casa.",
    name: "Sofía R.",
    from: "Santiago, Chile",
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
            <RevealOnScroll className="voice" key={v.name}>
              <Stars />
              <p>{v.text}</p>
              <div className="voice-by">
                <strong>{v.name}</strong>
                <small>{v.from}</small>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
