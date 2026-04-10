"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const INITIAL_COUNT = 8;
const LOAD_MORE_COUNT = 8;

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
  const [showCount, setShowCount] = useState(INITIAL_COUNT);

  const filtered =
    filter === "todos" ? images : images.filter((img) => img.cat === filter);
  const visible = filtered.slice(0, showCount);
  const remaining = filtered.length - showCount;

  function handleFilter(key: string) {
    setFilter(key);
    setShowCount(INITIAL_COUNT);
  }

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
              onClick={() => handleFilter(c.key)}
            >
              {c.label}
              <span className="gallery-tab-count">
                {c.key === "todos"
                  ? images.length
                  : images.filter((img) => img.cat === c.key).length}
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visible.map((img, i) => (
            <RevealOnScroll className="g-item" key={`${filter}-${img.cat}-${i}`}>
              <img src={img.src} alt={img.cat} loading="lazy" />
            </RevealOnScroll>
          ))}
        </div>

        {remaining > 0 && (
          <div className="gallery-more">
            <button
              className="gallery-more-btn"
              onClick={() => setShowCount((c) => c + LOAD_MORE_COUNT)}
            >
              Ver más fotos ({remaining})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
