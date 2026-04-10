import Link from "next/link";
import type { Room } from "@/data/rooms";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="room-row">
      <div className="room-media">
        <div className="room-media-num">{room.number}</div>
        <img src={room.image} alt={room.name} />
      </div>
      <div className="room-info">
        <span className="eyebrow">{room.eyebrowList}</span>
        <h3
          className="room-name"
          dangerouslySetInnerHTML={{ __html: room.nameHtml }}
        />
        <p className="room-desc">{room.descList}</p>
        <div className="room-tags">
          {room.tags.map((tag, i) => (
            <span key={i}>
              <i className={`fas ${tag.icon}`} /> {tag.text}
            </span>
          ))}
        </div>
        <div className="room-actions">
          <Link
            href={`/${room.category}/${room.slug}`}
            className="room-link"
          >
            Ver detalle <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </article>
  );
}
