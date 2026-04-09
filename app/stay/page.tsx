import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { StayContent } from "@/components/sections/StayContent";

export const metadata: Metadata = {
  title: "Stay With Us — Camp Lovište",
  description:
    "Camping plots for campervans, guest houses, a private house in Lovište and apartments in Viganj. Find the perfect accommodation on the Pelješac peninsula.",
};

export default function StayPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodation"
        title="Stay With Us"
        subtitle="Camping plots, guest houses, our family house & apartments in Viganj — all steps from the Adriatic."
        image="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1920&q=85"
        imageAlt="Stone house overlooking the sea"
      />
      <StayContent />
    </>
  );
}
