import RevealOnScroll from "./RevealOnScroll";

const CDN = "https://d1ofesossdj49a.cloudfront.net/sw_3123/TN";

export default function AboutSection() {
  return (
    <section className="about section-pad" id="nosotros">
      <div className="wrap">
        <div className="about-grid">
          <RevealOnScroll className="about-figures">
            <div className="fig fig-a">
              <img src={`${CDN}/5_982078.jpg`} alt="Faz Hostel" />
            </div>
            <div className="fig fig-b">
              <img src={`${CDN}/8_17387.jpg`} alt="Faz Hostel interior" />
            </div>
            <div className="about-num">
              <strong>+8 años</strong>
              <small>Recibiendo viajeros</small>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="about-text">
            <span className="eyebrow">Nuestra casa</span>
            <h2>
              Un hostel
              <br />
              hecho a mano,
              <br />
              <em>no en serie.</em>
            </h2>
            <p>
              Faz nació en Barrio Cofico con una idea simple: que viajar a
              Córdoba se sintiera como llegar a casa. Cada rincón está pensado y
              elegido — la cocina donde se cruzan los acentos, la galería donde
              se arman los planes, los cuartos donde el silencio se respeta.
            </p>
            <p>
              Tenemos compartidas para los que quieren conocer gente, privadas
              para los que necesitan descanso, studios y departamentos para los
              que se quedan más tiempo. Lo importante es que todos se vayan con
              una historia.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
