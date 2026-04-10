"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const categories = [
  { key: "todos", label: "Todos" },
  { key: "espacios", label: "Espacios Comunes" },
  { key: "hostel", label: "Hostel" },
  { key: "departamentos", label: "Departamentos" },
  { key: "privadas", label: "Privadas" },
];

function buildImages(cat: string, folder: string, count: number) {
  return Array.from({ length: count }, (_, i) => ({
    src: `/Galerias/galeria/${folder}/${i + 1}.jpg`,
    cat,
  }));
}

const images = [
  ...buildImages("espacios", "espacios", 23),
  ...buildImages("hostel", "hostel", 12),
  ...buildImages("departamentos", "departamentos", 46),
  ...buildImages("privadas", "privadas", 13),
];

export default function Gallery() {
  const [filter, setFilter] = useState("todos");

  const visible = filter === "todos" ? images : images.filter((img) => img.cat === filter);

  return (
    <section className="gallery" id="galeria">
      <div className="wrap">
        <RevealOnScroll className="section-head">
          <div>
            <span className="eyebrow">El lugar</span>
            <h2 style={{ marginTop: 22 }}>
              Pasá
              <br />
              <em>y mirá.</em>
            </h2>
          </div>
          <div className="section-head-meta">
            <p>
              Un recorrido visual por los rincones de Faz. Cada espacio fue
              pensado para que te sientas en casa.
            </p>
          </div>
        </RevealOnScroll>

        <div className="gallery-tabs">
          {categories.map((c) => (
            <button
              key={c.key}
              className={`gallery-tab${filter === c.key ? " active" : ""}`}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visible.map((img, i) => (
            <RevealOnScroll className="g-item" key={`${img.cat}-${i}`}>
              <img src={img.src} alt={img.cat} loading="lazy" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
