import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

const brands = [
  {
    title: "Faz Hostel",
    desc: "Habitaciones compartidas y privadas en el corazón de Cofico. La esencia de Faz.",
    href: "/habitaciones",
    bg: "/Galerias/faz-hostel.jpg",
  },
  {
    title: "Faz Aparts",
    desc: "Departamentos y studios completos para estadías más largas o grupos.",
    href: "/aparts",
    bg: "/Galerias/faz-aparts.jpg",
  },
  {
    title: "Faz Aventuras",
    desc: "Experiencias y excursiones para descubrir Córdoba como un local.",
    href: "#",
    bg: "/Galerias/faz-aventuras.jpeg",
  },
];

export default function BrandsSection() {
  return (
    <section className="brands">
      <div className="wrap">
        <RevealOnScroll className="brands-head">
          <div>
            <span className="eyebrow">Nuestro universo</span>
            <h2>
              Tres formas
              <br />
              de vivir <em>Faz.</em>
            </h2>
          </div>
          <p>
            Elegí la experiencia que mejor se adapta a tu viaje. Cada una con su
            propia personalidad.
          </p>
        </RevealOnScroll>

        <div className="brands-grid">
          {brands.map((b) => (
            <RevealOnScroll key={b.title} as="div">
              <Link
                href={b.href}
                className="brand-card"
                style={{ "--bg": `url('${b.bg}')` } as React.CSSProperties}
              >
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <span className="brand-link">
                  Ver más <i className="fas fa-arrow-right" />
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
