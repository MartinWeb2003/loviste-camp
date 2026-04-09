import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { StoryContent } from "@/components/sections/StoryContent";

export const metadata: Metadata = {
  title: "Our Story — Camp Lovište",
  description:
    "Four generations of family in Viganj and Lovište. Discover the story behind Camp Lovište on the Pelješac peninsula.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Three Generations · One Place"
        title="Our Story"
        subtitle="A family rooted in this soil long before it had a name on any tourist map."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
        imageAlt="Rocky Pelješac coastline at golden hour"
      />
      <StoryContent />
    </>
  );
}
