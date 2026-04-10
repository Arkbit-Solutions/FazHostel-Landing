import type { Room } from "@/data/rooms";

interface RoomDetailProps {
  room: Room;
}

export default function RoomDetail({ room }: RoomDetailProps) {
  return (
    <section className="room-detail">
      <div className="wrap">
        <div className="room-detail-grid">
          <div className="room-detail-media">
            <div className="room-detail-num">{room.number}</div>
            <img src={room.image} alt={room.name} />
          </div>

          <div className="room-detail-info">
            <span className="eyebrow">{room.eyebrowDetail}</span>
            <h1 dangerouslySetInnerHTML={{ __html: room.titleHtml }} />
            <p className="room-desc">{room.descDetail}</p>

            <div className="room-detail-specs">
              {room.specs.map((spec, i) => (
                <div className="spec" key={i}>
                  <i className={`fas ${spec.icon}`} />
                  <div>
                    <small>{spec.label}</small>
                    <strong>{spec.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5493517633333"
              className="room-detail-cta"
            >
              <i className="fab fa-whatsapp" /> Consultar disponibilidad
            </a>
          </div>
        </div>

        <div className="room-amenities">
          <div className="room-amenities-head">
            <span className="eyebrow">Comodidades incluidas</span>
            <h3>
              Disfrutá de <em>todo esto.</em>
            </h3>
          </div>

          <div className="amenities-grid">
            {room.amenities.map((amenity, i) => (
              <div className="amenity" key={i}>
                <i className={`fas ${amenity.icon}`} />
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {room.gallery && room.gallery.length > 0 && (
          <div className="room-gallery">
            <div className="room-gallery-head">
              <span className="eyebrow">Galería</span>
              <h3>
                Conocé el <em>espacio.</em>
              </h3>
            </div>
            <div className="room-gallery-grid">
              {room.gallery.map((src, i) => (
                <div className="room-gallery-item" key={i}>
                  <img src={src} alt={room.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
