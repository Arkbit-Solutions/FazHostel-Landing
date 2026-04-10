"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NavbarProps {
  solid?: boolean;
  activeDropdown?: string;
}

export default function Navbar({ solid = false, activeDropdown }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const navClass = [
    "nav",
    solid ? "solid" : "",
    scrolled ? "scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={navClass} id="nav">
      <div className="wrap nav-row">
        <Link href="/" className="brand">
          <img src="/Logo_Nuevo_214679.svg" alt="Faz Hostel" />
        </Link>

        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          <li>
            <Link href="/#nosotros" onClick={closeMenu}>
              Casa
            </Link>
          </li>
          <li className="nav-dropdown">
            <a href="#" className="nav-dropdown-trigger" onClick={(e) => e.preventDefault()}>
              Unidades <i className="fas fa-chevron-down" />
            </a>
            <div className="nav-dropdown-menu">
              <Link
                href="/habitaciones"
                className={activeDropdown === "Compartidas" ? "active" : ""}
                onClick={closeMenu}
              >
                Compartidas
              </Link>
              <Link
                href="/privadas"
                className={activeDropdown === "Privadas" ? "active" : ""}
                onClick={closeMenu}
              >
                Privadas
              </Link>
              <Link
                href="/studios"
                className={activeDropdown === "Studios" ? "active" : ""}
                onClick={closeMenu}
              >
                Studios
              </Link>
              <Link
                href="/aparts"
                className={activeDropdown === "Departamentos" ? "active" : ""}
                onClick={closeMenu}
              >
                Departamentos
              </Link>
            </div>
          </li>
          <li>
            <Link href="/#experiencia" onClick={closeMenu}>
              Experiencia
            </Link>
          </li>
          <li>
            <Link href="/#galeria" onClick={closeMenu}>
              Galería
            </Link>
          </li>
          <li>
            <Link href="/#contacto" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>

        <a href="https://wa.me/5493517633333" className="book-btn">
          Reservar
        </a>
        <button
          className="menu-toggle"
          id="menuToggle"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <i className="fas fa-bars" />
        </button>
      </div>
    </nav>
  );
}
