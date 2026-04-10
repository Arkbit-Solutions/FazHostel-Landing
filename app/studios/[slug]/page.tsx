import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import RoomDetail from "@/components/RoomDetail";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getRoomsByCategory, getRoomBySlug, categoryPages } from "@/data/rooms";

const cat = categoryPages.studios;

export function generateStaticParams() {
  return getRoomsByCategory("studios").map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: `${room.name} — Faz Hostel`,
    description: room.headerDesc,
  };
}

export default async function StudioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room || room.category !== "studios") notFound();

  return (
    <>
      <Navbar solid activeDropdown={room.activeNav} />
      <PageHeader
        backgroundImage={room.headerImage || room.image}
        eyebrow={`${room.number} — Studio`}
        h1Html={room.name}
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Studios", href: "/studios" },
          { label: room.name },
        ]}
        description={room.headerDesc}
      />
      <RoomDetail room={room} />
      <CTASection
        h2Html='Mejor precio<br><em>garantizado.</em>'
        description="Confirmación inmediata por WhatsApp. Te respondemos personalmente, no un bot."
        btnText="Consultar disponibilidad"
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
