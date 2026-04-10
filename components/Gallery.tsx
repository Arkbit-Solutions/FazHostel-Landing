"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const filtered =
    filter === "todos" ? images : images.filter((img) => img.cat === filter);
  const visible = filtered.slice(0, showCount);
  const remaining = filtered.length - showCount;

  function handleFilter(key: string) {
    setFilter(key);
    setShowCount(INITIAL_COUNT);
  }

  function openLightbox(index: number) {
    setLightbox(index);
    setZoomed(false);
  }

  function closeLightbox() {
    setLightbox(null);
    setZoomed(false);
  }

  const goPrev = useCallback(() => {
    if (lightbox === null) return;
    setZoomed(false);
    setLightbox(lightbox === 0 ? filtered.length - 1 : lightbox - 1);
  }, [lightbox, filtered.length]);

  const goNext = useCallback(() => {
    if (lightbox === null) return;
    setZoomed(false);
    setLightbox(lightbox === filtered.length - 1 ? 0 : lightbox + 1);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, goPrev, goNext]);

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
              <img
                src={img.src}
                alt={img.cat}
                loading="lazy"
                onClick={() => openLightbox(i)}
                style={{ cursor: "zoom-in" }}
              />
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

      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Anterior">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div
            className={`lightbox-img-wrap${zoomed ? " zoomed" : ""}`}
            onClick={(e) => { e.stopPropagation(); setZoomed(!zoomed); }}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].cat}
            />
          </div>

          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Siguiente">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="lightbox-counter">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}
    </section>
  );
}
