import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ExperiencesContent } from "@/components/sections/ExperiencesContent";

export const metadata: Metadata = {
  title: "Experiences — Camp Lovište",
  description:
    "Surf school, day trips to Korčula, wine tasting on Pelješac, sea kayaking, cycling and more. All the experiences waiting for you near Camp Lovište.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Beyond the Camp"
        title="Experiences"
        subtitle="Lovište is the perfect base for exploring one of Croatia's most unspoiled corners."
        image="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=85"
        imageAlt="Surfer in the Adriatic"
      />
      <ExperiencesContent />
    </>
  );
}
