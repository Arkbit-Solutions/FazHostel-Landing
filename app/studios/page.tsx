import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import RoomCard from "@/components/RoomCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getRoomsByCategory, categoryPages } from "@/data/rooms";

const cat = categoryPages.studios;

export const metadata: Metadata = {
  title: cat.title,
  description: cat.metaDesc,
};

export default function StudiosPage() {
  const rooms = getRoomsByCategory("studios");

  return (
    <>
      <Navbar solid activeDropdown={cat.activeNav} />
      <PageHeader
        backgroundImage={cat.headerImage}
        eyebrow={cat.eyebrow}
        h1Html={cat.h1Html}
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Studios" },
        ]}
        description={cat.headerDesc}
      />

      <section className="rooms section-pad">
        <div className="wrap">
          <div className="rooms-list">
            {rooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        h2Html={cat.ctaH2Html}
        description={cat.ctaDesc}
        btnText={cat.ctaBtnText}
      />
      <Footer
        col2={{
          title: cat.footerCol2Title,
          links: cat.footerCol2Links,
        }}
      />
      <WhatsAppFloat />
    </>
  );
}
