import RevealOnScroll from "./RevealOnScroll";

const experiences = [
  {
    icon: "fa-wifi",
    title: "Wi-Fi de alta velocidad",
    desc: "Internet rápido y estable en todo el hostel. Trabajá, mirá lo que quieras o subí mil fotos del viaje.",
    num: "01",
  },
  {
    icon: "fa-mug-saucer",
    title: "Desayuno",
    titleExtra: "con costo adicional",
    desc: "Café de verdad y pan recién hecho para empezar el día sin apuro.",
    num: "02",
  },
  {
    icon: "fa-snowflake",
    title: "Aire frío / calor",
    desc: "Climatización individual en cada cuarto, porque dormir bien no es negociable.",
    num: "03",
  },
  {
    icon: "fa-key",
    title: "Cerraduras electrónicas",
    desc: "Acceso seguro y sin llaves perdidas. Tu propia clave para entrar y salir cuando quieras.",
    num: "04",
  },
  {
    icon: "fa-bed",
    title: "Ropa de blanco",
    desc: "Sábanas y toallas siempre frescas. Vos llegás, nosotros nos encargamos del resto.",
    num: "05",
  },
  {
    icon: "fa-car",
    title: "Estacionamiento",
    titleExtra: "sujeto a disponibilidad",
    desc: "Lugar para tu auto cuando lo necesites. Llegás y descansás, sin vueltas.",
    num: "06",
  },
  {
    icon: "fa-shuttle-van",
    title: "Transfer",
    desc: "Te buscamos y te llevamos. Una llegada (o despedida) sin estrés.",
    num: "07",
  },
  {
    icon: "fa-wine-glass",
    title: "Bar",
    desc: "De noche el living se vuelve bar. El lugar donde nacen las amistades de viaje.",
    num: "08",
  },
];

export default function ExperienceGrid() {
  return (
    <section className="experience section-pad" id="experiencia">
      <div className="wrap">
        <RevealOnScroll className="section-head">
          <div>
            <span className="eyebrow">La experiencia</span>
            <h2 style={{ marginTop: 22 }}>
              Más que
              <br />
              <em>una cama.</em>
            </h2>
          </div>
          <div className="section-head-meta">
            <p>
              Pequeños gestos que hacen la diferencia. Esto es lo que vas a
              encontrar cuando cruces la puerta de Faz.
            </p>
          </div>
        </RevealOnScroll>

        <div className="exp-grid">
          {experiences.map((exp) => (
            <RevealOnScroll className="exp-item" key={exp.num}>
              <i className={`fas ${exp.icon}`} />
              <div>
                <h3>
                  {exp.title}
                  {exp.titleExtra && <small>{exp.titleExtra}</small>}
                </h3>
                <p>{exp.desc}</p>
              </div>
              <span className="exp-num">{exp.num}</span>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
