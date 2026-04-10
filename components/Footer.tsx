import Link from "next/link";

interface FooterCol {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  col2?: FooterCol;
}

export default function Footer({ col2 }: FooterProps) {
  const defaultCol2: FooterCol = {
    title: "Estancias",
    links: [
      { label: "Faz Studios", href: "/studios" },
      { label: "Faz Apartments", href: "/aparts" },
      { label: "Faz Aventura", href: "#" },
      { label: "Faz Flat", href: "#" },
    ],
  };

  const column2 = col2 || defaultCol2;

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/Logo_Nuevo_214679.svg" alt="Faz Hostel" />
            <p>
              Un hostel hecho a mano en Barrio Cofico, Córdoba. Habitaciones
              honestas, buena cocina y la calidez de quien te recibe en su casa.
            </p>
            <div className="socials">
              <a
                href="https://web.facebook.com/people/Faz-Hostel"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                title="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://www.instagram.com/fazhostel"
                target="_blank"
                rel="noopener"
                aria-label="Instagram Faz Hostel"
                title="Instagram @fazhostel"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.instagram.com/fazflat"
                target="_blank"
                rel="noopener"
                aria-label="Instagram Faz Flat"
                title="Instagram @fazflat"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://wa.me/5493517633333"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Navegar</h5>
            <ul>
              <li>
                <Link href="/#nosotros">Nuestra casa</Link>
              </li>
              <li>
                <Link href="/habitaciones">Habitaciones</Link>
              </li>
              <li>
                <Link href="/#experiencia">Experiencia</Link>
              </li>
              <li>
                <Link href="/#galeria">Galería</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>{column2.title}</h5>
            <ul>
              {column2.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contacto</h5>
            <ul>
              <li>
                <a href="#">General Paz 1539</a>
              </li>
              <li>
                <a href="https://wa.me/5493517633333">+54 9 351 763 3333</a>
              </li>
              <li>
                <a href="mailto:info@fazhostel.com">info@fazhostel.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 Faz Hostel &middot; Cofico, Córdoba</div>

        </div>
      </div>
    </footer>
  );
}
