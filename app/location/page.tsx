import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LocationContent } from "@/components/sections/LocationContent";

export const metadata: Metadata = {
  title: "Location — Camp Lovište",
  description:
    "Camp Lovište is at the tip of the Pelješac peninsula. 50m from the beach, 12 min ferry to Korčula, 90km from Dubrovnik. Find out how to reach us.",
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Find Us"
        title="Location"
        subtitle="The western tip of Pelješac — quiet, beautiful, and closer to everything than you think."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85"
        imageAlt="Crystal clear Adriatic beach"
      />
      <LocationContent />
    </>
  );
}
