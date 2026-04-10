import RevealOnScroll from "./RevealOnScroll";

const CDN = "https://d1ofesossdj49a.cloudfront.net/sw_3123/TN";

const images = [
  { src: `${CDN}/2_339246.jpg`, cls: "g-1" },
  { src: `${CDN}/3_607803.jpg`, cls: "g-2" },
  { src: `${CDN}/6_148692.jpg`, cls: "g-3" },
  { src: `${CDN}/7_180057.jpg`, cls: "g-4" },
  { src: `${CDN}/9_936819.jpg`, cls: "g-5" },
  { src: `${CDN}/15_150809.jpg`, cls: "g-6" },
  { src: `${CDN}/16_303688.jpg`, cls: "g-7" },
];

export default function Gallery() {
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

        <div className="gallery-grid">
          {images.map((img) => (
            <RevealOnScroll className={`g-item ${img.cls}`} key={img.cls}>
              <img src={img.src} alt="" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
