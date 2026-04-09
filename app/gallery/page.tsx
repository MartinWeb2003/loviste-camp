import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryContent } from "@/components/sections/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery — Camp Lovište",
  description:
    "Photos of Camp Lovište, the Adriatic coast, Pelješac peninsula, nearby Korčula and the surrounding landscape.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="In Pictures"
        title="Gallery"
        subtitle="A thousand words wouldn't do it justice. The light here is like nowhere else."
        image="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1920&q=85"
        imageAlt="Golden light on the Croatian coast"
      />
      <GalleryContent />
    </>
  );
}
